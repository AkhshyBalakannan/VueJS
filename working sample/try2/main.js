Vue.component('mainbody', {
    props: {
        members: {
            type: Object,
            required: true
        },
        comGreetUser: {
            type: String,
            required: true,
            default: "Hello All "
        },
    },
    template: `
    <div>    
    <h1>{{ comGreetUser }}</h1>
    <h2>{{ message }}</h2>
    <ul>
        <li v-for="member in members" v-if="member.status == 'online'">
        <p>{{ member.name }} {{ member.age }}</p>
        </li>
    </ul>
    <button @click="fromCompEmit">
    click me to alert you
    </button>
    </div>
    `,
    data() {
        return {
            message: "Hey -from the component"
        }
    },
    methods: {
        fromCompEmit() {
            this.$emit('compdosomething')
            console.log("button clicked")
        }
    }
})

var app = new Vue({
    el: '#app',
    data: {
        greet: 'Hello',
        user: 'Anonymous',
        members: [{ name: "Akhshy", status: "online", age: 22 },
        { name: "Ashwin", status: "online", age: 16 },
        { name: "Balakannan", status: "online", age: 52 },
        { name: "Ananthi", status: "online", age: 46 }],
        tellTrue: true
    },
    methods: {
        doSomething() {
            console.log("hell yeah I am working")
            return alert("HEY YOU!!")
        }
    },
    computed: {
        greetUser() {
            return this.greet + ' ' + this.user
        }
    }
})
