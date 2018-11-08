var one = new Vue({
    el: '#vue-app-one',
    data: {
        title: 'Vue App One'
    },
    methods: {
    },
    computed: {
        greet: function () {
            return 'Hello from app one'
        }
    }
});

var two = new Vue({
    el: '#vue-app-two',
    data: {
        title: 'Vue App Two'
    },
    methods: {
        changeTitle: function () {
            one.title = 'Title changed from app Two'
        }
    },
    computed: {
        greet: function () {
            return 'This is app2 speaking'
        }
    }
});

two.title = 'Changed from outside';