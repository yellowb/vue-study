var com = {
    template: '<div> I am hero ! </div>'
};

var app = new Vue({
    el: '#app',
    components: {
        'my-com': com
    }
});