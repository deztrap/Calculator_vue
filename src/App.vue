<template>
  <div id="app">
    <nav class="dark-bgn">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/calculator">Calculator</router-link> |
      <router-link to="/calculatoragain">Calculator2</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #26272b;
}
html,
body {
  background: #26272b;
}
.dark-bgn {
  background: #26272b;
  color: white;
}
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #ffffff;
}

nav a.router-link-exact-active {
  color: #e75729;
}
</style>
