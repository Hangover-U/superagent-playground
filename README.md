# superagent-playground

给 dsh-superagent 测试用的仓库。故意留了几个小毛病，方便让 agent 上手改。

## 是什么

一个最朴素的静态页面 + 几个纯函数。没有构建步骤，没有依赖，改完直接开浏览器就能看。

## 目录

```
index.html     页面
styles.css     样式
src/greet.js   问候语函数
tests/greet.test.js  纯 node 测试
```

## 跑测试

```sh
node tests/greet.test.js
```

## 已知的小问题（留给 agent 修）

1. `styles.css` 里 `.card` 的 padding 上下左右不一致
2. `README.md` 里有个错别字：「朴愫」应为「朴素」
3. `src/greet.js` 的 `greet()` 对空字符串没有处理
