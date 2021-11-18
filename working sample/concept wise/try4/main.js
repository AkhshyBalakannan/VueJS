var app = new Vue({
    el: "#app",
    data: {
        message: "Hello there"
    },
    methods: {
        readRefs() {
            console.log(this.$refs)
            console.log(this.$refs.test.innerHTML)
        }
    },
    computed: {

    }
})