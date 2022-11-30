var vueInstance = new Vue({
    el: '#app',
    data: {
        title: 'DT SAMSUNG',
        url: 'https://www.facebook.com/',
        targer: '_blank',
        price: 12000,
        check: true,
    },
    methods: {
        say: function (text) {
            return 'Hello' + text;
        },

        formatPrice() {
            var number = this.price;
            return new Intl.NumberFormat('de-DE', {
                style: 'currency',
                currency: 'VND'
            }).format(number);
        }
    }
});

console.log(vueInstance);

// setTimeout(()=> {
//     vueInstance.title = 'aaaa'
// }, 3000)