import { DefaultTheme, defineConfig } from 'vitepress'
import { readdir, stat } from 'fs/promises'
import { join, extname, basename } from 'path'

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
