/**
 * Created by HUANGYE2 on 4/25/2017.
 */

    // 定义名为 todo-item 的新组件
Vue.component('todo-item', {
    props: ['todo'],
    template: '<p>{{todo}}</p>'
});

var show = {age: 10};

var app = new Vue({
        el: '#app',
        data: {
            message: 'Hello Vue!',
            message2: '',
            show: show,
            seen: true,
            listData: [
                "AAA",
                "BBB",
                "CCC"
            ],
            todoList: [
                {
                    text: 'todo-1'
                },
                {
                    text: 'todo-2'
                }
            ]
        },
        computed: {
            messageLength1: function () {
                console.log('Computed !');
                return this.message.length;
            }
        },
        methods: {
            click: function () {
                //this.listData.push('fff');
                show.b = 'aaa';
                show.age = 11;
            },
            messageLength2: function () {
                console.log('Method !');
                return this.message.length;
            }
        },
        filters: {
            yellowFilter1: function(value, arg) {
                return value + arg;
            },
            yellowFilter2: function (value, arg) {
                return arg + value;
            },
            json: function (value) {
                return JSON.stringify(value);
            }
        }
    }
);

app.$watch('data', function (newVal, oldVal) {
    console.log('show updated 啦! ', newVal, ' ', oldVal);
})

