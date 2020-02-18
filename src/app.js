import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',
    data:{
      rates: []

    },
    mounted(){
      this.fetchRates();
    },
    methods:{
      fetchRates: function(){
        const request = fetch('https://api.exchangeratesapi.io/latest')
        .then(response => response.json())
        .then(data => this.rates = data);


      },
      // getCountries: function(){
//   fetch("https://restcountries.eu/rest/v2/all")
//   .then(res => res.json())
//   .then(countries => this.countries = countries)
// },
    }
  })
})
    // });
  // });
// });
