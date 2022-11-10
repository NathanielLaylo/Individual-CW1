var webstore = new Vue({
    
    el: '#app', 
    data: { // the 'data' option
        sitename: 'iLearn Academy',
        showLesson: true,
        lesson: lessons,
        cart: [],
        sortedLesson: []
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
        remove: function (selectedLesson) {
            const index = this.cart.indexOf(selectedLesson);
            if (index > -1) { 
                this.cart.splice(index, 1);
            }
            var lessonLength = this.lesson.length;
            for (var i = 0; i < lessonLength; i++){
                if (this.lesson[i].id == selectedLesson.id){
                    this.lesson[i].space++;
                }
                
            }

        },
        toggleShowCart() {
            this.showLesson = this.showLesson ? false : true;
        },
        canAddtoCart(selectedLesson){
            return selectedLesson.space > 0;
        },
        myFunction() {
            document.getElementById("myDropdown").classList.toggle("show");
          }
        
    },
    computed: {
        totalItemsCart: function () {
            return this.cart.length || "";
        },

        sortLesson(){
            sortedLesson = lessons;
            function compare(a, b){
                if (a.space > b.space) return 1;
                if (a.space < b.space) return -1;
                return 0;
            }
            return sortedLesson.sort(compare);
        }
    }
});

