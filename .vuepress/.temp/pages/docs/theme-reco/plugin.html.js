import comp from "E:/mingboke/.vuepress/.temp/pages/docs/theme-reco/plugin.html.vue"
const data = JSON.parse("{\"path\":\"/docs/theme-reco/plugin.html\",\"title\":\"plugin\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"plugin\",\"date\":\"2020/05/28\"},\"headers\":[],\"git\":{},\"filePathRelative\":\"docs/theme-reco/plugin.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
