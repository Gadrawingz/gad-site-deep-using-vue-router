<template>
  <nav id="nav">
    <router-link to="/">Home</router-link> |
    <router-link :to=" { name: 'about' }">About Us</router-link> |
    <router-link :to=" { name: 'contact' }">Contact Us</router-link>
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: blue;
  text-decoration: none;
  padding: 8px;
  border-radius: 4px;
}

nav a.router-link-exact-active {
  color: #FFF;
  background: rgb(9, 9, 108);
}
</style>
