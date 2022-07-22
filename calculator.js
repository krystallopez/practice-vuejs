var App = {
  data: function() {
    return {
      message: "Hello Vue!",
      number1: 0,
      number2: 0,
      number3: 0,
      sum: 0,
      product: 0,
      difference: 0
    };
  },
  methods: {
    computeSum: function () {
    this.sum = this.number1 + this.number2 + this.number3;
    console.log(this.sum);
    },
    computeProduct: function () {
    this.product = this.number1 * this.number2 * this.number3;
    console.log(this.product);
    },
    computeDifference: function () {
      this.difference = this.number1 - this.number2 - this.number3;
      console.log(this.difference);
    },
  },
};

Vue.createApp(App).mount('#app');