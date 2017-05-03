var app = new Vue({
    el: '#app',
    data: {
        classObject: {
            'font-italic': true,
            'bold': false,
            'red' : true
        }
    },
    methods: {
        changeFont: function() {
            this.classObject['font-italic'] = !this.classObject['font-italic'];
        },
        changeBold: function() {
            this.classObject['bold'] = !this.classObject['bold'];
        },
        changeRed: function() {
            this.classObject['red'] = !this.classObject['red'];
        }
    }
})