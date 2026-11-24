import { DefaultTheme, defineConfig } from 'vitepress'
import { readdir, stat, lstat, readFile, copyFile, mkdir } from 'fs/promises'
import { join, extname, basename, dirname, resolve, relative } from 'path'

// VitePress 默认的 KNOWN_EXTENSIONS 表里没有这些扩展名，会被误判为页面链接而追加 .html。
// 通过官方环境变量补充，让这类附件链接保持原样。
process.env.VITE_EXTRA_EXTENSIONS = [process.env.VITE_EXTRA_EXTENSIONS, 'sh', 'py', 'bat', 'ps1', 'docx', 'xlsx', 'pptx', 'xls', '7z', 'rar', 'tar', 'xz', 'bz2', 'log', 'ini'].filter(Boolean).join(',')

// 递归扫描目录生成侧边栏
async function buildSidebar(dir: string, prefix = '', skipDirs: string[] = []): Promise<DefaultTheme.SidebarItem[]> {
  const items: DefaultTheme.SidebarItem[] = []
  const entries = await readdir(dir)

  for (const entry of entries.sort()) {
    if (entry === 'assets' || entry === 'assets_T31' ||
        entry === 'convert_ascii_tables.py' || entry === 'README.md' ||
        skipDirs.includes(entry)) continue

    const fullPath = join(dir, entry)
    const st = await stat(fullPath)

    if (st.isDirectory()) {
      const indexPath = join(fullPath, 'index.md')
      let hasIndex = false
      try {
        const indexStat = await stat(indexPath)
        hasIndex = indexStat.isFile()
      } catch {}

      const dirLink = hasIndex
        ? (prefix ? `${prefix}/${entry}/` : `/${entry}/`)
        : undefined

      const children = await buildSidebar(fullPath, prefix ? `${prefix}/${entry}` : `/${entry}`, skipDirs)
      if (children.length > 0) {
        items.push({
          text: entry,
          collapsed: true,
          link: dirLink,
          items: children
        })
      } else if (hasIndex) {
        items.push({ text: entry, link: dirLink })
      }
    } else if (extname(entry) === '.md') {
      const name = basename(entry, '.md')
      if (name === 'index') continue
      const link = prefix ? `${prefix}/${name}` : `/${name}`
      items.push({ text: name, link })
    }
  }
  return items
}

// 中文分词器
function chineseTokenizer(text: string): string[] {
  const enTokens: string[] = []
  const cnChars: string[] = []
  let currentCn = ''
  for (const ch of text) {
    if (/[\u4e00-\u9fff]/.test(ch)) {
      currentCn += ch
    } else {
      if (currentCn.length > 0) {
        cnChars.push(currentCn)
        if (currentCn.length >= 2) {
          cnChars.push(currentCn.slice(0, 2))
          cnChars.push(currentCn.slice(0, 1))
        }
        currentCn = ''
      }
      if (/[a-zA-Z0-9]/.test(ch)) {
        enTokens.push(ch)
      } else if (enTokens.length > 0) {
        enTokens.push(' ')
      }
    }
  }
  if (currentCn.length > 0) {
    cnChars.push(currentCn)
    if (currentCn.length >= 2) {
      cnChars.push(currentCn.slice(0, 2))
      cnChars.push(currentCn.slice(0, 1))
    }
  }
  return [...enTokens.filter(t => t !== ' '), ...cnChars].filter(t => t.length > 0)
}

const docsDir = join(process.cwd(), 'docs')

// 构建结束后，把 Markdown 中非图片链接引用的附件（pdf/json/sh/mp4 等）按原始
// 相对路径复制到输出目录，保证页面里 href 指向的文件真实存在。
// 图片语法 ![](...) 由 Vite 资产管线处理（哈希命名），这里不重复复制。
async function copyLinkedAttachments(srcDir: string, outDir: string) {
  const mdFiles: string[] = []
  const walk = async (dir: string) => {
    for (const entry of await readdir(dir)) {
      const full = join(dir, entry)
      const st = await lstat(full)
      if (st.isSymbolicLink()) continue
      if (st.isDirectory()) {
        if (entry === 'public') continue
        await walk(full)
      } else if (entry.endsWith('.md')) {
        mdFiles.push(full)
      }
    }
  }
  await walk(srcDir)

  const copied = new Set<string>()
  // [文本](目标)，捕获组 1 为 ! 时是图片语法
  const linkRe = /(!?)\[((?:[^\[\]]|\[[^\]]*\])*)\]\(([^)\s]+?)(?:\s+"[^"]*")?\)/g
  for (const md of mdFiles) {
    const text = await readFile(md, 'utf-8')
    for (const m of text.matchAll(linkRe)) {
      const [, bang, , rawTarget] = m
      if (bang === '!') continue
      let target = rawTarget.split('#')[0].split('?')[0]
      if (!target || /^(https?:)?\/\//.test(target) || /^(mailto|tel):/.test(target)) continue
      if (/\.(md|html)$/i.test(target) || target.endsWith('/')) continue
      let decoded: string
      try { decoded = decodeURIComponent(target) } catch { decoded = target }
      const abs = target.startsWith('/')
        ? resolve(srcDir, '.' + decoded)
        : resolve(dirname(md), decoded)
      const rel = relative(srcDir, abs)
      if (!rel || rel.startsWith('..') || rel.startsWith('public/')) continue
      if (copied.has(rel)) continue
      let st
      try { st = await stat(abs) } catch { continue }
      if (!st.isFile()) continue
      if (st.size > 20 * 1024 * 1024) {
        console.warn(`[copy-linked-attachments] 跳过大文件 ${rel}（${(st.size / 1048576).toFixed(1)}MB），大附件请放到官网下载服务器并使用 https://www.inexbot.com/api/cms-assets/downloads/ 链接`)
        continue
      }
      const dest = join(outDir, rel)
      await mkdir(dirname(dest), { recursive: true })
      await copyFile(abs, dest)
      copied.add(rel)
    }
  }
  console.log(`[copy-linked-attachments] 已复制 ${copied.size} 个链接附件到输出目录`)
}

// 各语言侧边栏
const zhSidebar = await buildSidebar(join(docsDir, 'zh'), '/zh')
const enSidebar = await buildSidebar(join(docsDir, 'en'), '/en')

// 搜索配置
function searchOptions(useChineseTokenizer: boolean) {
  return {
    detailedView: true,
    maxResults: 60,
    minLength: 1,
    fields: ['title', 'titles', 'text'] as const,
    storeFields: ['title', 'titles'] as const,
    ...(useChineseTokenizer ? { tokenize: (text: string) => chineseTokenizer(text) } : {}),
    searchOptions: {
      fuzzy: 0.2,
      prefix: true,
      boost: { title: 4, text: 2, titles: 1 }
    }
  }
}

export default defineConfig({
  srcDir: "./docs",
  ignoreDeadLinks: true,
  outDir: "./dist",
  async buildEnd() {
    await copyLinkedAttachments(docsDir, resolve(process.cwd(), 'dist'))
  },
  head: [
    // Umami 统计
    ['script', { defer: '', src: 'https://analytics.inexbot.com/script.js', 'data-website-id': 'a1c8ea98-16ff-4d72-b807-2daab1bdbed2' }],
    // Umami 回放 & 热图
    ['script', { defer: '', src: 'https://analytics.inexbot.com/recorder.js', 'data-website-id': 'a1c8ea98-16ff-4d72-b807-2daab1bdbed2' }]
  ],
  sitemap: {
    hostname: 'https://doc.inexbot.com'
  },
  themeConfig: {
    i18nRouting: false,
    search: {
      provider: 'local',
      options: searchOptions(true)
    }
  },
  locales: {
    zh: {
      label: '中文',
      lang: 'zh-CN',
      title: '纳博特科技知识库',
      description: '纳博特科技官方知识库',
      themeConfig: {
        nav: [
          { text: '首页', link: '/zh/' },
          { text: '产品资料', link: '/zh/产品资料/' },
          { text: '技术资料', link: '/zh/技术资料/' },
          { text: '操作手册', link: '/zh/操作手册/' },
          { text: '行业方案', link: '/zh/行业方案/' },
          { text: '常见问题', link: '/zh/常见问题/' }
        ],
        socialLinks: [
          { icon: 'github', link: 'https://github.com/inexbot/inexbot-document-zh' }
        ],
        sidebar: zhSidebar,
        search: {
          provider: 'local',
          options: searchOptions(true)
        }
      }
    },
    en: {
      label: 'English',
      lang: 'en-US',
      title: 'iNexBot Knowledge Base',
      description: 'iNexBot Official Knowledge Base',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Products', link: '/en/Products/' },
          { text: 'Technical', link: '/en/Technical/' },
          { text: 'Manuals', link: '/en/Manuals/' },
          { text: 'Solutions', link: '/en/Solutions/' },
          { text: 'FAQ', link: '/en/FAQ/' }
        ],
        socialLinks: [
          { icon: 'github', link: 'https://github.com/inexbot/inexbot-document-zh' }
        ],
        sidebar: enSidebar,
        search: {
          provider: 'local',
          options: searchOptions(false)
        }
      }
    }
  }
})
