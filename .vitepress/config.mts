import { DefaultTheme, defineConfig } from 'vitepress'
import { readdir, stat } from 'fs/promises'
import { join, extname, basename } from 'path'

// 递归扫描目录生成侧边栏
async function buildSidebar(dir: string, prefix = ''): Promise<DefaultTheme.SidebarItem[]> {
  const items = []
  const entries = await readdir(dir)

  for (const entry of entries.sort()) {
    // 跳过特殊文件和 assets
    if (entry === 'index.md' || entry === 'assets' || entry === 'assets_T31' ||
        entry === 'convert_ascii_tables.py' || entry === 'README.md') continue

    const fullPath = join(dir, entry)
    const st = await stat(fullPath)

    if (st.isDirectory()) {
      const children = await buildSidebar(fullPath, prefix ? `${prefix}/${entry}` : `/${entry}`)
      if (children.length > 0) {
        items.push({
          text: entry,
          collapsed: true,
          items: children
        })
      }
    } else if (extname(entry) === '.md') {
      const name = basename(entry, '.md')
      const link = prefix ? `${prefix}/${name}` : `/${name}`
      items.push({ text: name, link })
    }
  }
  return items
}

// 获取 docs 目录路径
const docsDir = join(process.cwd(), 'docs')

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

export default defineConfig({
  title: "纳博特科技知识库",
  description: "纳博特科技官方知识库",
  srcDir: "./docs",
  ignoreDeadLinks: true,
  outDir: "./dist",
  sitemap: {
    hostname: 'https://doc.inexbot.com'
  },
  themeConfig: {
    sidebar: await buildSidebar(docsDir),
    search: {
      provider: 'local',
      options: {
        detailedView: true,
        maxResults: 60,
        minLength: 1,
        // 索引字段
        fields: ['title', 'titles', 'text'],
        // 存储字段（用于结果展示）
        storeFields: ['title', 'titles'],
        // 自定义中文分词
        tokenize: (text: string) => chineseTokenizer(text),
        // 搜索选项
        searchOptions: {
          fuzzy: 0.2,
          prefix: true,
          boost: { title: 4, text: 2, titles: 1 }
        }
      }
    }
  }
})
