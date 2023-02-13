<template>
  <div class="mains">
    <div
      class="p-3 rounded foggy"
      style="
        max-width: 400px;
        margin: 100px;
        background: linear-gradient(191.34deg, #17181a -4.95%, #17181a 103.74%);
        box-shadow: 32px 12px 80px rgba(0, 93, 178, 0.8);

        backdrop-filter: blur(51px);
      "
    >
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
              highlight_bg: ['C', '+', '-', '/', '*', '%', '='].includes(
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
        "*",
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
      operator: undefined,
      previousValue: "",
    };
  },
  methods: {
    calculate(element) {
      if (!isNaN(element) || element === ".") {
        this.CalculatorResult += element + "";
      }
      if (element === "C") {
        this.CalculatorResult = "";
      }
      if (["/", "x", "*", "-"].includes(element)) {
        this.operator = element;
        this.previousValue = this.CalculatorResult;
        this.CalculatorResult = "";
      }
      if (element === "=") {
        this.CalculatorResult = eval(
          this.previousValue + this.operator + this.CalculatorResult
        );
        this.previousValue = "";
        this.operator = null;
      }
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
