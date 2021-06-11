<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<style lang="scss">
  *{
    padding:0;
    margin:0;
  }
  li{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  html {
    width: 100%;
    height: 100%;
  }
  body {
    width: 1920px;
    height: 1080px;
    background: #f7f8fa;
    box-sizing: border-box;
    overflow: hidden;
  }
  #app {
    width: 100%;
    height: 100%;
  }
</style>
