<template>
  <div>
    <div class="number-box">
      <span class="score" :class="'score'+index" v-for="(item, index) in numberArr" :key="index">{{
        item
      }}</span>
    </div>
  </div>
</template>

<script>
import { DigitRoll } from "@/assets/js/digitroll_bak.js";
export default {
  data() {
    return {
      numberVal: 12312121212121212,
      numberArr: [],
    };
  },
  mounted() {
    this.numberSplit();
  },
  methods: {
    numberSplit() {
      let numArr = String(this.numberVal).split("");
      console.log(numArr, "numArr-----");
      this.numberArr = numArr;
      setTimeout(() => {
        numArr.forEach((item,index) => {
          if (item === ".") {
            return;
          }
          new DigitRoll({
            container: `.number-box .score${index}`,
          }).roll(Number(item));
        });
      }, 0);
    },
  },
};
</script>
<style lang="scss" scoped>

/* //  */
@font-face {
  /*字体名称*/
  font-family: calculatorFont;
  src: url("../../assets/font/calculatorFontBold.TTF");
}
.number-box {
  display: flex;
  margin-top: 0.3125rem !important;
}
.number-box span.score {
  color: #fff;
  font-size: 40px !important;
  font-family: calculatorFont !important;

  width: 1.25rem !important;
  height: 2.1875rem !important;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #a2c0f4;
  color: #0058b3;
  font-weight: bold;
}
</style>