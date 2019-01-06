<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
/* html, body, #app 的height 都必须设置为100%,
页面默认才有浏览器的高度
注掉观察效果
*/
html {
  height: 100%;
  box-sizing: border-box;
}

body {
  height: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  font-family: Microsoft YaHei, 'Avenir', Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Arial, sans-serif;
}

#app {
  height: 100%;
  font-family: Microsoft YaHei, 'Avenir', Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Arial, sans-serif;
  font-size: 14px;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  margin: 0;
  padding: 0;
}

body .el-container {
  position: relative;
  height: 100%;
}
</style>
