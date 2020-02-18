import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',
    data:{
      rates: [],
            base: "GBP",
            baseInput: 0,
            selected: "EUR",
    },
    computed: {
      exchanged: function() {
        const result = this.baseInput * this.rates[this.selected];
        return result.toFixed(2);
      },
    },
    mounted(){
      this.fetchRates();
    },
    methods:{
      fetchRates: function(){
        const request = fetch(`https://api.exchangeratesapi.io/latest?base=${this.base}`)
        .then(response => response.json())
        .then(data =>
          // this.rates = console.log(data.rates));
          this.rates = data.rates);

      },
    }
  });
});
