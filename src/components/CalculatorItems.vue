<template>
  <div class="mains" style="text-align: center; background: #26272b">
    <div
      class="p-3 neomorph"
      style="
        display: inline-block;
        margin: 0 auto;
        max-width: 400px;
        border-radius: 40px;
      "
    >
      <div
        class="w-full m-1 p-3 text-right neoresult font-weight-bold text-white"
      >
        {{ CalculatorResult || 0 }}
      </div>
      <div class="row no-gutters" style="padding-top: 100px">
        <div class="col-3" v-for="element in CalculatorItems" :key="element">
          <div
            class="lead text-center m-1 py-3 text-white hover-class neobtn"
            :class="{
              neospecial: ['C', '+', '-', '/', '*', '%', '='].includes(element),
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
.neomorph {
  background: linear-gradient(180deg, #464545 0%, #2b2a2a 100%);
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25), 4px 4px 4px rgba(0, 0, 0, 0.25);
}
.neobtn {
  background: linear-gradient(142deg, #555454 16.39%, #323131 80.68%);
  box-shadow: 6px 6px 4px rgba(0, 0, 0, 0.57),
    -6px -6px 13px rgba(255, 255, 255, 0.15);
  border-radius: 100px;
  box-sizing: border-box;
  border: 2px solid rgba(58, 57, 57, 1);
}
.neospecial {
  background: linear-gradient(134.21deg, #c63608 16.53%, #e75729 84.36%);
  box-shadow: 6px 6px 4px rgba(5, 5, 5, 0.57),
    -6px -6px 13px rgba(255, 255, 255, 0.15);
  border: 2px solid rgba(226, 82, 36, 1);
}
.neoresult {
  box-shadow: 4px 4px 4px #3c3b3b, -4px -4px 13px rgba(255, 255, 255, 0.06);
  height: 250px;
  padding-bottom: 200px;
  border-radius: 20px;
  font-size: 50px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif Impact,
    Haettenschweiler, "Arial Narrow Bold", sans-serif;
  font-weight: 500;
}
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
