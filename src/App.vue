<template>
  <div id="app">
    <calculator-items />
  </div>
</template>

<script>
import CalculatorItems from "./components/CalculatorItems.vue";

export default {
  name: "App",
  components: {
    CalculatorItems,
  },
};
</script>

<style>
html {
  align-content: center;
  background: #26272b;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
  margin-top: 60px;
}
</style>
