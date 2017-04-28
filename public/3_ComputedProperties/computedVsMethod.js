/**
 * Created by HUANGYE2 on 4/25/2017.
 */

var app = new Vue({
        el: '#app',
        data: {
            message: 'Hello Vue!',
            message2: '',
        },
        computed: {
            messageLength1: function () {
                console.log('Computed !');
                return this.message.length;
            }
        },
        methods: {
            messageLength2: function () {
                console.log('Method !');
                return this.message.length;
            }
        }
    }
);


