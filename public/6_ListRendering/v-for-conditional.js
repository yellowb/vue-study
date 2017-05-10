var app = new Vue({
    el: '#app',
    data: {
        condition: 0,
        people: [
            {name: 'Tom', age: 20},
            {name: 'Mary', age: 12},
            {name: 'Ken', age: 31},
            {name: 'Billy', age: 200}
        ]
    },
    computed: {
        largerThen: function() {
            var condition = this.condition;
            return this.people.filter(function(el) {
                return el.age > condition;
            });
        }
    }
});