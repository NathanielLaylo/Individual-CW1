var webstore = new Vue({
    
    el: '#app', 
    data: { // the 'data' option
        sitename: 'iLearn Academy',
        showLesson: true,
        lesson: lessons,
        cart: [],
    },
    methods: {
        add: function (selectedLesson) {
            let x = parseFloat(selectedLesson.space);
            let cartLess = structuredClone(selectedLesson);
            if (x > 0) {
                x = x - 1;
                cartLess.space = 1;
                this.cart.push(cartLess);
                selectedLesson.space = x;
            }            
        },
        toggleShowCart() {
            this.showLesson = this.showLesson ? false : true;
        }
    },
    computed: {
        totalItemsCart: function () {
            return this.cart.length || "";
        },
        canAddtoCart() {
            return this.product.space > 0;
        }
    }
});

