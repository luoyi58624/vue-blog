<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">博客首页</router-link> |
      <router-link to="/addBlog">添加博客</router-link>
    </div>
   <!-- <keep-alive :max="10" exclude="Detail">
      <router-view/>
    </keep-alive>-->
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
