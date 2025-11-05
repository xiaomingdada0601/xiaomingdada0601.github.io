#!/usr/bin/env sh

# 确保脚本抛出遇到的错误

set -e

# 生成静态文件

npm run build

# 进入生成的文件夹

cd .vuepress/dist

git init
git add -A
git commit -m 'init: blog'

git push -f git@github.com:xiaomingdada0601/xiaomingdada0601.github.io.git master:gh-pages

cd -
