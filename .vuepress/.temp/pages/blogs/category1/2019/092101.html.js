import comp from "E:/mingboke/.vuepress/.temp/pages/blogs/category1/2019/092101.html.vue"
const data = JSON.parse("{\"path\":\"/blogs/category1/2019/092101.html\",\"title\":\"second page in category1\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"second page in category1\",\"date\":\"2019/09/21\",\"tags\":[\"tag2\"],\"categories\":[\"category1\"]},\"headers\":[],\"git\":{\"createdTime\":1744356113000,\"updatedTime\":1744356113000,\"contributors\":[{\"name\":\"杨明明\",\"email\":\"15689280+yangmingming0601@user.noreply.gitee.com\",\"commits\":1}]},\"filePathRelative\":\"blogs/category1/2019/092101.md\"}")
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
