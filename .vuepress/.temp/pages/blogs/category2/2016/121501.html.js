import comp from "E:/mingboke/.vuepress/.temp/pages/blogs/category2/2016/121501.html.vue"
const data = JSON.parse("{\"path\":\"/blogs/category2/2016/121501.html\",\"title\":\"first page in category2\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"first page in category2\",\"date\":\"2016/12/15\",\"tags\":[\"tag3\"],\"categories\":[\"category2\"]},\"headers\":[],\"git\":{},\"filePathRelative\":\"blogs/category2/2016/121501.md\"}")
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
