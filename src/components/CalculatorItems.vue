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
      <div class="calcname">NEOMORPH CALCULATOR</div>
      <div class="w-full m-1 p-3 text-right neoresult">
        {{ Calculated }}
        {{ CalculatorResult || 0 }}
      </div>

      <div class="row no-gutters" style="padding-top: 40px">
        <div class="col-3" v-for="element in CalculatorItems" :key="element">
          <div
            class="lead text-center m-1 py-3 hover-class neobtn"
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
      Calculated: "",
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
        "+/-",
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
      if (element === "%") {
        this.CalculatorResult = this.CalculatorResult / 100;
      }
      if (element === "+/-") {
        this.CalculatorResult = this.CalculatorResult + this.CalculatorResult;
      }

      if (["/", "x", "*", "-", "+"].includes(element)) {
        this.operator = element;
        this.previousValue = this.CalculatorResult;
        this.CalculatorResult = "";
      }
      if (element === "=") {
        let previous = parseFloat(this.previousValue);
        let result = parseFloat(this.CalculatorResult);

        this.CalculatorResult = eval(previous + this.operator + result);
        this.CalculatorResult = parseFloat(this.CalculatorResult);

        if (this.CalculatorResult === Infinity) {
          this.CalculatorResult = "Really? dbz";
        }
        this.CalculatorResult = this.previousValue;
      }
    },
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Orbitron:wght@500&display=swap");
.neomorph {
  background: linear-gradient(180deg, #2b2c30 0%, #26272b 100%);
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25), 4px 4px 4px rgba(0, 0, 0, 0.25);
}
.neobtn {
  background: linear-gradient(142deg, #34363a 16.39%, #26272b 80.68%);
  box-shadow: 6px 6px 4px rgba(0, 0, 0, 0.57),
    -6px -6px 13px rgba(255, 255, 255, 0.04);
  border-radius: 100px;
  box-sizing: border-box;
  border: 2px solid rgba(38, 39, 43, 1);
  color: #7f8286;
}
.neospecial {
  background: linear-gradient(134.21deg, #a21d14 16.53%, #e75729 84.36%);
  box-shadow: 6px 6px 4px rgba(5, 5, 5, 0.57),
    -6px -6px 13px rgba(255, 255, 255, 0.15);
  border: 2px solid rgba(226, 82, 36, 1);
  color: #fff;
  font-weight: 200;
}
.neoresult {
  background: #1f2023;
  box-shadow: 2px 2px 4px rgba(255, 255, 255, 0.11),
    -2px -2px 4px rgba(0, 0, 0, 0.49);
  height: 300px;
  padding-bottom: 200px;
  border-radius: 20px;
  font-size: 50px;
  font-family: "Orbitron", sans-serif;
  font-weight: 400;
  color: #e75729;
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
.calcname {
  color: #535659;
  font-size: 12px;
  padding-bottom: 8px;
}
</style>
