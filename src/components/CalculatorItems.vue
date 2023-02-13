<template>
  <div class="container">
    <div class="p-3" style="max-width: 400px; margin: 50px; background: #234">
      <div
        class="
          w-full
          rounded
          m-1
          p-3
          text-right
          lead
          font-weight-bold
          text-white
        "
        style="background: #31475e"
      >
        {{ CalculatorResult || 0 }}
      </div>
      <div class="row no-gutters">
        <div class="col-3" v-for="element in CalculatorItems" :key="element">
          <div
            class="
              lead
              dark-bg
              text-center
              m-1
              py-3
              text-white
              rounded
              hover-class
            "
            :class="{
              highlight_bg: ['C', '+', '-', '/', 'x', '%', '='].includes(
                element
              ),
            }"
            @click="calculate(element)"
          >
            {{ element }}
          </div>
        </div>
      </div>
    </div>
    <p>{{ operators }}</p>
    <input placeholder="enter number" />
  </div>
</template>
<script>
export default {
  name: "CalculatorItem",
  data: function () {
    return {
      CalculatorResult: "",
      CalculatorItems: [
        "C",
        "+",
        "-",
        "/",
        7,
        8,
        9,
        "x",
        4,
        5,
        6,
        "%",
        1,
        2,
        3,
        "=",
        "0",
        ".",
      ],
      operators: ["+", "-", "*", "/", "="],
    };
  },
  methods: {
    calculate(element) {
      this.CalculatorResult += element;
    },
  },
};
</script>
<style>
.text-right {
  text-align: right;
}
.hover-class:hover {
  cursor: pointer;
  background-color: #1a1720;
}
.dark-bg {
  background: #31475e;
}
.highlight_bg {
  background: rgb(140, 8, 235);
}
</style>
