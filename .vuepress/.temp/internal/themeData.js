export const themeData = JSON.parse("{\"logo\":\"/logo.png\",\"author\":\"reco_luan\",\"authorAvatar\":\"/head.png\",\"docsRepo\":\"https://github.com/vuepress-reco/vuepress-theme-reco-next\",\"docsBranch\":\"main\",\"docsDir\":\"example\",\"lastUpdatedText\":\"\",\"series\":{\"/docs/theme-reco/\":[{\"text\":\"module one\",\"children\":[\"home\",\"theme\"]},{\"text\":\"module two\",\"children\":[\"api\",\"plugin\"]}]},\"navbar\":[{\"text\":\"Home\",\"link\":\"/\"},{\"text\":\"Categories\",\"link\":\"/categories/reco/1.html\"},{\"text\":\"Tags\",\"link\":\"/tags/tag1/1.html\"},{\"text\":\"Docs\",\"children\":[{\"text\":\"vuepress-reco\",\"link\":\"/docs/theme-reco/theme\"},{\"text\":\"vuepress-theme-reco\",\"link\":\"/blogs/other/guide\"}]}],\"bulletin\":{\"body\":[{\"type\":\"text\",\"content\":\"🎉🎉🎉 reco 主题 2.x 已经接近 Beta 版本，在发布 Latest 版本之前不会再有大的更新，大家可以尽情尝鲜了，并且希望大家在 QQ 群和 GitHub 踊跃反馈使用体验，我会在第一时间响应。\",\"style\":\"font-size: 12px;\"},{\"type\":\"hr\"},{\"type\":\"title\",\"content\":\"QQ 群\"},{\"type\":\"text\",\"content\":\"\\n          <ul>\\n            <li>QQ群1：1037296104</li>\\n            <li>QQ群2：1061561395</li>\\n            <li>QQ群3：962687802</li>\\n          </ul>\",\"style\":\"font-size: 12px;\"},{\"type\":\"hr\"},{\"type\":\"title\",\"content\":\"GitHub\"},{\"type\":\"text\",\"content\":\"\\n          <ul>\\n            <li><a href=\\\"https://github.com/vuepress-reco/vuepress-theme-reco-next/issues\\\">Issues<a/></li>\\n            <li><a href=\\\"https://github.com/vuepress-reco/vuepress-theme-reco-next/discussions/1\\\">Discussions<a/></li>\\n          </ul>\",\"style\":\"font-size: 12px;\"},{\"type\":\"hr\"},{\"type\":\"buttongroup\",\"children\":[{\"text\":\"打赏\",\"link\":\"/docs/others/donate.html\"}]}]}}")

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
