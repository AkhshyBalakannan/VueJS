Vue.component('login', {
    template: `
    <div>
            <ul>
            <li v-if="errors.length" v-for="error in errors">{{ error }}</li>
            </ul>
            <input v-model="name">
            <input v-model="password">
            <button @click="submitfunction">submit</button>
    </div>            
    `,
    data() {
        return {
            name: null,
            password: null,
            errors: []
        }
    },
    methods: {
        submitfunction() {
            console.log("inside submit function")
            if (this.name && this.password) {
                let credentials = {
                    name: this.name,
                    password: this.password
                }
                this.$emit('credential-log', credentials)
                this.name = null
                this.password = null

            }
            else {
                if (!this.name) this.errors.push('name is not filled')
                if (!this.password) this.errors.push('password is not filled')
            }
        }
    }
})

var app = new Vue({
    el: '#app',
    data: {
        loginInfos: [],
    },
    methods: {
        addToScreen(credential) {
            this.loginInfos.push(credential)
        }
    }
})