FROM --platform=$TARGETPLATFORM node:14-alpine AS builder
WORKDIR /app

# install and cache app dependencies
COPY package.json .
RUN yarn

COPY . .
RUN yarn run build

FROM nginx:alpine

LABEL org.opencontainers.image.authors="weihanli@outlook.com"
LABEL org.opencontainers.image.source="https://github.com/WeihanLi/markdown-nice"

COPY --from=builder /app/build /usr/share/nginx/html
