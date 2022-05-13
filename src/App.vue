<template>
  <div id="app">
    <nav>
      <router-link to="/image_upload">图片上传</router-link>    |    
      <router-link to="/image_show">图片查看</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width:100%;
  height:100%;
  background: url("./assets/bg1.png");
  background-size:100% 100%; 
  position:fixed;
  margin:0;
}

nav {
  padding: 15px;
  font-size:28px;
  font-family:'楷体';
}

nav a {
  font-weight: bold;
  color: #000;
}

nav a.router-link-exact-active {
  color: #66ccff;
}
.gaps{
  background:#000;
  height:5px;
  width:100%;
}
</style>
