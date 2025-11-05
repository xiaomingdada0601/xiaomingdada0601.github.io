import comp from "E:/mingboke/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"modules\":[\"BannerBrand\",\"Blog\",\"MdContent\",\"Footer\"],\"bannerBrand\":{\"bgImage\":\"/bg.svg\"},\"isShowTitleInHome\":true,\"actionText\":\"About\",\"actionLink\":\"/views/other/about\"},\"headers\":[{\"level\":2,\"title\":\"快速开始\",\"slug\":\"快速开始\",\"link\":\"#快速开始\",\"children\":[]}],\"git\":{\"createdTime\":1744356113000,\"updatedTime\":1744356113000,\"contributors\":[{\"name\":\"杨明明\",\"email\":\"15689280+yangmingming0601@user.noreply.gitee.com\",\"commits\":1}]},\"filePathRelative\":\"README.md\"}")
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
