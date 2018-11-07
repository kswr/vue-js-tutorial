new Vue({
    el:'#vue-app',
    data: {
        name: 'Shaun',
        job: 'Ninja',
        website: 'http://www.thenetninja.co.uk',
        websiteTag: '<a href ="http://www.thenetninja.co.uk">The Net Ninja Website</a>'
    },
    methods: {
        greet: function (time) {
            return 'Good ' + time.charAt(0).toUpperCase() + time.slice(1).toLowerCase() + ' ' + this.name
        }
    }
});

new Vue({
    el:'#vue-app2',
    data: {
        age: 24,
        x: 0.,
        y: 0.,
    },
    methods: {
        add: function (years) {
            this.age += years;
        },
        subtract: function (years) {
            this.age -= years;
        },
        updateXY: function (event) {
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
        click: function () {
            alert('Alert!');
        }
    }
});

new Vue({
    el:'#vue-app3',
    data: {
        name: '',
        age: ''

    },
    methods: {
        logName: function () {

        },
        logAge: function () {
            console.log("you entered your age")
        }
    }

});