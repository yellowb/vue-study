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
            // Cached, execute if only the model changes.
            messageLength1: function () {
                console.log('Computed @ ' + new Date().toString());
                return this.message.length;
            }
        },
        methods: {
            // Execute every time
            messageLength2: function () {
                console.log('Method @ ' + new Date().toString());
                return this.message.length;
            }
        }
    }
);


