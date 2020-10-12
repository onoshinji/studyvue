new Vue({
    el: "#app",
    data: {
        name: "Kei",
        age: "30",
        counter: 0
    },
    methods: {
        increase: function() {
        this.counter += 1;
    }
  }
})
