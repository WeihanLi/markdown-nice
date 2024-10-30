# markdown-nice

## Intro

基于原仓库 [mdnice](https://github.com/mdnice/markdown-nice) 改造，增加 docker 支持

在线体验地址：<https://mdnice.weihanli.xyz>

docker image on dockerhub: https://hub.docker.com/r/weihanli/mdnice

## 使用 container 部署 mdnice

docker

``` sh
docker run --name mdnice -d -p 9000:80 --restart always weihanli/mdnice:latest
```

podman
``` sh
podman run --name mdnice -d -p 9000:80 --restart always weihanli/mdnice:latest
```

## markdown-nice 简介

- 支持自定义样式的 Markdown 编辑器
- 支持微信公众号、知乎和稀土掘金
- 欢迎[在线使用](https://mdnice.com/)
- 有疑问请参考 [如何有效的解决 mdnice 相关问题？](https://github.com/mdnice/markdown-nice/issues/163)
