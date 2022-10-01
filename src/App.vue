<template>
  <nav id="nav">
    <router-link to="/">Home</router-link>
    <router-link :to=" { name: 'about' }">About Us</router-link>
    <router-link :to=" { name: 'contact' }">Contact Us</router-link>
    <router-link :to=" { name: 'Courses' }">Courses</router-link>
    <router-link :to=" { name: 'Hobbies' }">Hobbies</router-link>
  </nav>

  <div class="quick-go">
    <button @click="forward">Go Forward</button>
    <button @click="redirect">Redirect Home</button>
    <button @click="backward">Go Back</button>
  </div>
  <router-view />
</template>

<script>
export default {
  methods: {
    forward() {
      this.$router.go(1)
    },
    redirect() {
      this.$router.push({name: 'home'})
    },
    backward() {
      this.$router.go(-1)
    }
  }
}
</script>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  margin: 30px;
  padding-bottom: 20px;
  with: 100%;
  border-bottom: 4px solid gray; 
}

nav a {
  font-weight: bold;
  color: blue;
  text-decoration: none;
  padding: 10px;
  margin-right: 12px;
  margin: 12px 20px 12px 12px;
  border-bottom: 2px solid blue;

}

nav a:hover {
  background: green;
  color: white;
}

nav a.router-link-exact-active {
  color: #FFF;
  background: rgb(9, 9, 108);
}

.page-content {
  border: 1px solid #000;
  border-radius: 5px;
  margin: 15px; 
}

.page-content p{
  border-left: 5px solid cadetblue;
  text-align: left;
  margin-left: 6px;
  padding-left: 6px;
  padding: 30px;
  letter-spacing: 1px;
}

.quick-go {
  background: #999;
  padding: 10px;
  margin: 15px;
}

.quick-go button{
  font-family: georgia;
  padding: 6px;
  color: black;
  border-radius: 3px;
  margin-left: 5px;
  background: white;
  border: none;
  font-size: 16px;
}

</style>
