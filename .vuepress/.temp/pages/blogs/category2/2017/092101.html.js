import comp from "E:/mingboke/.vuepress/.temp/pages/blogs/category2/2017/092101.html.vue"
const data = JSON.parse("{\"path\":\"/blogs/category2/2017/092101.html\",\"title\":\"second page in category2\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"second page in category2\",\"date\":\"2017/09/21\",\"tags\":[\"tag4\"],\"categories\":[\"category2\"]},\"headers\":[],\"git\":{},\"filePathRelative\":\"blogs/category2/2017/092101.md\"}")
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
