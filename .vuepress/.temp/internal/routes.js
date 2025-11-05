export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/timeline.html", { loader: () => import(/* webpackChunkName: "timeline.html" */"E:/mingboke/.vuepress/.temp/pages/timeline.html.js"), meta: {"title":""} }],
  ["/posts.html", { loader: () => import(/* webpackChunkName: "posts.html" */"E:/mingboke/.vuepress/.temp/pages/posts.html.js"), meta: {"title":""} }],
  ["/friendship-link.html", { loader: () => import(/* webpackChunkName: "friendship-link.html" */"E:/mingboke/.vuepress/.temp/pages/friendship-link.html.js"), meta: {"title":""} }],
  ["/categories/JVM/1.html", { loader: () => import(/* webpackChunkName: "categories_JVM_1.html" */"E:/mingboke/.vuepress/.temp/pages/categories/JVM/1.html.js"), meta: {"title":""} }],
  ["/categories/MySql/1.html", { loader: () => import(/* webpackChunkName: "categories_MySql_1.html" */"E:/mingboke/.vuepress/.temp/pages/categories/MySql/1.html.js"), meta: {"title":""} }],
  ["/categories/fenkufenbiao/1.html", { loader: () => import(/* webpackChunkName: "categories_fenkufenbiao_1.html" */"E:/mingboke/.vuepress/.temp/pages/categories/fenkufenbiao/1.html.js"), meta: {"title":""} }],
  ["/tags/jvm/1.html", { loader: () => import(/* webpackChunkName: "tags_jvm_1.html" */"E:/mingboke/.vuepress/.temp/pages/tags/jvm/1.html.js"), meta: {"title":""} }],
  ["/tags/mysql/1.html", { loader: () => import(/* webpackChunkName: "tags_mysql_1.html" */"E:/mingboke/.vuepress/.temp/pages/tags/mysql/1.html.js"), meta: {"title":""} }],
  ["/tags/sharding/1.html", { loader: () => import(/* webpackChunkName: "tags_sharding_1.html" */"E:/mingboke/.vuepress/.temp/pages/tags/sharding/1.html.js"), meta: {"title":""} }],
  ["/posts/1.html", { loader: () => import(/* webpackChunkName: "posts_1.html" */"E:/mingboke/.vuepress/.temp/pages/posts/1.html.js"), meta: {"title":""} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/mingboke/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/docs/message-board.html", { loader: () => import(/* webpackChunkName: "docs_message-board.html" */"E:/mingboke/.vuepress/.temp/pages/docs/message-board.html.js"), meta: {"title":"留言板"} }],
  ["/docs/theme-reco/api.html", { loader: () => import(/* webpackChunkName: "docs_theme-reco_api.html" */"E:/mingboke/.vuepress/.temp/pages/docs/theme-reco/api.html.js"), meta: {"title":"api"} }],
  ["/docs/theme-reco/home.html", { loader: () => import(/* webpackChunkName: "docs_theme-reco_home.html" */"E:/mingboke/.vuepress/.temp/pages/docs/theme-reco/home.html.js"), meta: {"title":"theme-reco"} }],
  ["/docs/theme-reco/plugin.html", { loader: () => import(/* webpackChunkName: "docs_theme-reco_plugin.html" */"E:/mingboke/.vuepress/.temp/pages/docs/theme-reco/plugin.html.js"), meta: {"title":"plugin"} }],
  ["/docs/theme-reco/theme.html", { loader: () => import(/* webpackChunkName: "docs_theme-reco_theme.html" */"E:/mingboke/.vuepress/.temp/pages/docs/theme-reco/theme.html.js"), meta: {"title":"theme"} }],
  ["/blogs/mysql/2025/explain.html", { loader: () => import(/* webpackChunkName: "blogs_mysql_2025_explain.html" */"E:/mingboke/.vuepress/.temp/pages/blogs/mysql/2025/explain.html.js"), meta: {"title":"EXPLAIN详解"} }],
  ["/blogs/sharding/2025/what-is-sharding.html", { loader: () => import(/* webpackChunkName: "blogs_sharding_2025_what-is-sharding.html" */"E:/mingboke/.vuepress/.temp/pages/blogs/sharding/2025/what-is-sharding.html.js"), meta: {"title":"什么是分库分表？"} }],
  ["/blogs/javabase/jvm/20251104/jvm%E5%86%85%E5%AD%98%E7%BB%93%E6%9E%84.html", { loader: () => import(/* webpackChunkName: "blogs_javabase_jvm_20251104_jvm内存结构.html" */"E:/mingboke/.vuepress/.temp/pages/blogs/javabase/jvm/20251104/jvm内存结构.html.js"), meta: {"title":"深入理解JVM内存结构"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"E:/mingboke/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
