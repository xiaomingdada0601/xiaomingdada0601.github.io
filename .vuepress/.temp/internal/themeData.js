export const themeData = JSON.parse("{\"logo\":\"/logo.png\",\"author\":\"mingdada\",\"authorAvatar\":\"/head.png\",\"docsRepo\":\"https://github.com/xiaomingdada0601/xiaomingdada0601.github.io.git\",\"docsBranch\":\"docs\",\"docsDir\":\"example\",\"lastUpdatedText\":\"\",\"series\":{\"/docs/theme-reco/\":[{\"text\":\"module one\",\"children\":[\"home\",\"theme\"]},{\"text\":\"module two\",\"children\":[\"api\",\"plugin\"]}]},\"navbar\":[{\"text\":\"首页\",\"link\":\"/\"}]}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
