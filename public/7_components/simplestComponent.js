var com = {
    template: '<div> I am {{ name }} ! </div>',
    data: function () {
        return {name: 'pig'};
    }
};

var app = new Vue({
    el: '#app',
    components: {
        'my-com': com
    }
});