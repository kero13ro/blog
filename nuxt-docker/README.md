## 測試 docker env 和 Nuxt 設定
```
docker image ls
docker build -t nuxt-test .
docker run  -p 80:3000 nuxt-test
docker image ls
```