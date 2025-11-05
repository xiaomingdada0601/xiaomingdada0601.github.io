import comp from "E:/mingboke/.vuepress/.temp/pages/docs/theme-reco/theme.html.vue"
const data = JSON.parse("{\"path\":\"/docs/theme-reco/theme.html\",\"title\":\"theme\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"theme\",\"date\":\"2020/05/27\"},\"headers\":[],\"git\":{\"createdTime\":1744356113000,\"updatedTime\":1744356113000,\"contributors\":[{\"name\":\"杨明明\",\"email\":\"15689280+yangmingming0601@user.noreply.gitee.com\",\"commits\":1}]},\"filePathRelative\":\"docs/theme-reco/theme.md\"}")
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
