/**
 * Created by HUANGYE2 on 4/25/2017.
 */

var app = new Vue({
        el: '#app',
        data: {
            message: 'Hello Vue!',
            prefixSymbol: null,
            suffixSymbol: null
        },
        filters: {
            prefix: function(value, arg) {
                if(!arg) {arg = '**';}
                return value + arg;
            },
            suffix: function (value, arg) {
                if(!arg) {arg = '##';}
                return arg + value;
            }
        }
    }
);
