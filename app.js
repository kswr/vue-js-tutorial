
new Vue({
    el: '#vue-app',
    data: {
        output: 'your fav food'
    },
    methods: {
        readRefs: function () {
            console.log(this.$refs.test.innnerText);
            this.output = this.$refs.input.value;
        }
    },
    computed: {
    }
});
