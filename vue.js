var webstore = new Vue({
    
    el: '#app', 
    data: { // the 'data' option
        sitename: 'iLearn Academy',
        showLesson: true,
        lesson: lessons,
        cart: [],
        sortOrder: 0
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
            let a = (document.getElementById("SortOrder").value);
            let b = (document.getElementById("SortType").value);
            this.sortOrder = a * b;
            this.sortLesson();
           
          },
          sortLesson(){   
            switch (this.sortOrder) {
                case 5:
                    function subAsc(a, b) {
                        if (a.subject.toLowerCase() > b.subject.toLowerCase()) return 1;
                        if (a.subject.toLowerCase() < b.subject.toLowerCase()) return -1;
                        return 0;
                    }
                    this.lesson.sort(subAsc);
                    this.cart.sort(subAsc);
                    break;
                    
                case 6:
                    function subDes(a, b) {
                        if (a.subject.toLowerCase() > b.subject.toLowerCase()) return -1;
                        if (a.subject.toLowerCase() < b.subject.toLowerCase()) return 1;
                        return 0;
                    }
                    this.lesson.sort(subDes);
                    this.cart.sort(subDes);
                    break;
                    
                case 10:
                    function locAsc(a, b) {
                        if (a.location.toLowerCase() > b.location.toLowerCase()) return 1;
                        if (a.location.toLowerCase() < b.location.toLowerCase()) return -1;
                        return 0;
                    }
                    this.lesson.sort(locAsc);
                    this.cart.sort(locAsc);
                    break;
                    
                case 12:
                    function locDes(a, b) {
                        if (a.location.toLowerCase() > b.location.toLowerCase()) return -1;
                        if (a.location.toLowerCase() < b.location.toLowerCase()) return 1;
                        return 0;
                    }
                    this.lesson.sort(locDes);
                    this.cart.sort(locDes);
                    break;
                    
                case 15:                   
                    function priAsc(a, b) {
                        if (a.price > b.price) return 1;
                        if (a.price < b.price) return -1;
                        return 0;
                    }
                    this.lesson.sort(priAsc);
                    this.cart.sort(priAsc);
                    break;
                    
                case 18:
                    function priDes(a, b) {
                        if (a.price > b.price) return -1;
                        if (a.price < b.price) return 1;
                        return 0;
                    }
                    this.lesson.sort(priDes);
                    this.cart.sort(priDes);
                    break;
                    
                case 20:
                    function spaAsc(a, b) {
                        if (a.space > b.space) return 1;
                        if (a.space < b.space) return -1;
                        return 0;
                    }
                    this.lesson.sort(spaAsc);
                    this.cart.sort(spaAsc);
                    break;
                    
                case 24:
                    function spaDes(a, b) {
                        if (a.space > b.space) return -1;
                        if (a.space < b.space) return 1;
                        return 0;
                    }
                    this.lesson.sort(spaDes); 
                    this.cart.sort(spaDes); 
                    break;                    
            }
           
        }
          
        
    },
    computed: {
        totalItemsCart: function () {
            return this.cart.length || "";
        }
        
        
    }
});

