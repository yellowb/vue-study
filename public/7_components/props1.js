var com = {
    template: '<div><div> I am [{{ propsName }}] ! (Click button will cause warning)' +
        '<button @click="addWarn">add-warn</button></div>' +
        '<div> I am [{{ localName }}] ! (Click button NO warning)' +
        '<button @click="addNoWarn">add-no-warn</button></div></div>',
    props: {
        'propsName': {
            type: String,
            'default': 'no name'
        }
    },
    data: function() {
        return {
            // use a local variable to be init from props
            localName: this.propsName
        };
    },
    methods: {
        'addWarn': function() {
            // this will cause Vue.js warning
            this.propsName = this.propsName + 'lo';
        },
        'addNoWarn': function() {
            // this will NOT cause Vue.js warning
            this.localName = this.localName + 'lo';
        }
    },
    watch: {
        'propsName': function() {
            // Need WATCH to sync parent's data.
            this.localName = this.propsName;
        }
    }
};

var app = new Vue({
    el: '#app',
    data: {
        input: ''
    },
    components: {
        'my-com': com
    }
});