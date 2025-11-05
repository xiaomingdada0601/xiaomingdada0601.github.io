import comp from "E:/mingboke/.vuepress/.temp/pages/blogs/extracts/2019/the-road.html.vue"
const data = JSON.parse("{\"path\":\"/blogs/extracts/2019/the-road.html\",\"title\":\"《未选择的路》\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"《未选择的路》\",\"date\":\"2019-03-26T00:00:00.000Z\",\"tags\":[\"poem\"],\"categories\":[\"摘记\"]},\"headers\":[],\"git\":{\"createdTime\":1744356113000,\"updatedTime\":1744356113000,\"contributors\":[{\"name\":\"杨明明\",\"email\":\"15689280+yangmingming0601@user.noreply.gitee.com\",\"commits\":1}]},\"filePathRelative\":\"blogs/extracts/2019/the-road.md\"}")
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
