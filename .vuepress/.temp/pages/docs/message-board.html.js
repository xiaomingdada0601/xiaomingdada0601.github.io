import comp from "E:/mingboke/.vuepress/.temp/pages/docs/message-board.html.vue"
const data = JSON.parse("{\"path\":\"/docs/message-board.html\",\"title\":\"留言板\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"留言板\",\"date\":\"2024/06/01\",\"hideComments\":false},\"headers\":[],\"git\":{},\"filePathRelative\":\"docs/message-board.md\"}")
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
