import comp from "E:/mingboke/.vuepress/.temp/pages/docs/theme-reco/theme.html.vue"
const data = JSON.parse("{\"path\":\"/docs/theme-reco/theme.html\",\"title\":\"theme\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"theme\",\"date\":\"2020/05/27\"},\"headers\":[],\"git\":{},\"filePathRelative\":\"docs/theme-reco/theme.md\"}")
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
