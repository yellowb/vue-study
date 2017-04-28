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
        methods: {
            click: function () {
                //this.listData.push('fff');
                show.b = 'aaa';
                show.age = 11;
            }
        },
        updated: function() {
            console.log('Update啦啦啦');
        }
    }
);

app.$watch('data', function (newVal, oldVal) {
    console.log('show updated 啦! ', newVal, ' ', oldVal);
})

