## webpack_sample_project-practice >>> [参考网址](https://www.jianshu.com/p/42e11515c10f)
**版本**：node@v8.16.2, webpack@v4.41.2<br>

`babel-loader@7`,`extract-text-webpack-plugin@next`,..<br><br>
**最好使用 cnpm 下载模块**
```
npm install -g cnpm --registry=https://registry.npm.taobao.org
cnpm install
```

## git action: push 后自动发布到github pages
1. 设置`github pages` 源为： `branch/docs`
2. 更改 webpack.production.config.js 文件，将输出路径改为： `docs`(原为`build`路径)
3. 使用 ssh_keygen 生成密钥，将 私有密钥添加到设置的`secrets`，变量名为` DEPLOY_PRIVATE_KEY`,与 `.github/wordflows/nodejs.yml`文件使用的变量对应；将公共变量添加到本仓库设置到`deploy keys`中 
4. 选择 Action , 添加 workflows，可以选择 node.js 模板。修改 nodejs.yml 文件内容。具体可参考[文件](https://github.com/linxiaoki/webpack_sample_project-practice/blob/master/.github/workflows/nodejs.yml)
5. 查看页面：https://linxiaoki.github.io/webpack_sample_project-practice/
6. 参考：[github actions 入门教程](http://www.ruanyifeng.com/blog/2019/09/getting-started-with-github-actions.html)，[Github actions 自动发布 Hexo](https://juejin.im/post/5da03d5e6fb9a04e046bc3a2)
test

