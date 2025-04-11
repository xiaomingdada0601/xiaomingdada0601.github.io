import comp from "E:/mingboke/.vuepress/.temp/pages/docs/theme-reco/api.html.vue"
const data = JSON.parse("{\"path\":\"/docs/theme-reco/api.html\",\"title\":\"api\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"api\",\"date\":\"2020/05/29\"},\"headers\":[],\"git\":{},\"filePathRelative\":\"docs/theme-reco/api.md\"}")
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
