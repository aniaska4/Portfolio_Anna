<template>
  <div id="app">
    <div id="nav">
      <div class="container">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/projects">Projects</router-link> |
        <router-link to="/skills">Skills</router-link> |  
        <router-link to="/contact">Contact</router-link> |
      </div>
    </div>
    <router-view/>
  </div>
</template>

<style>
body{

  background-color: #AADAC5;
}
.container{
  max-width: 700px;
  width: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


#nav {
  padding: 30px;
  display: flex;
  justify-content: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  font-size: 26px;
  padding: 15px;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  text-decoration: underline;
}
</style>
