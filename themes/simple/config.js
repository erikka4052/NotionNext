const CONFIG = {

  SIMPLE_LOGO_IMG: '/Logo.webp',
  SIMPLE_TOP_BAR: true, // 显示顶栏
  SIMPLE_TOP_BAR_CONTENT: process.env.NEXT_PUBLIC_THEME_SIMPLE_TOP_TIPS || '',
  SIMPLE_LOGO_DESCRIPTION: process.env.NEXT_PUBLIC_THEME_SIMPLE_LOGO_DESCRIPTION || '<div>阿简<br/>/打人工<br/>/百广爱好者(特指qsxy)<br/>/生命不息，折腾不止</div>',

  SIMPLE_AUTHOR_LINK: process.env.NEXT_PUBLIC_AUTHOR_LINK || '#',

  SIMPLE_POST_AD_ENABLE: process.env.NEXT_PUBLIC_SIMPLE_POST_AD_ENABLE || false, // 文章列表是否插入广告

  SIMPLE_POST_COVER_ENABLE: process.env.NEXT_PUBLIC_SIMPLE_POST_COVER_ENABLE || false, // 是否展示博客封面

  // 菜单配置
  SIMPLE_MENU_CATEGORY: true, // 显示分类
  SIMPLE_MENU_TAG: true, // 显示标签
  SIMPLE_MENU_ARCHIVE: true, // 显示归档
  SIMPLE_MENU_SEARCH: true // 显示搜索
  NEXT_WIDGET_TO_TOP: true, // 是否显示回顶
  NEXT_WIDGET_TO_BOTTOM: false, // 显示回底
  NEXT_WIDGET_DARK_MODE: true, // 显示日间/夜间模式切换
  NEXT_WIDGET_TOC: true, // 移动端显示悬浮目录
}
export default CONFIG
