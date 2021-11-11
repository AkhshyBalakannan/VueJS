// Vue.component('student', {
//     props: {
//         studentDetail: {
//             type: Object,
//             required: true
//         }
//     },
//     template: `
//     <div class="student-member">
//     {{ studentDetail }}
//     </div>`,
// })

// var app = new Vue({
//     el: '#app',
//     data: {
//         staff: {
//             name: 'Akhshy Ganesh',
//             classTeacher: true,
//             email: 'akhshyganeshb@gmail.com',
//             isStaff: true
//         },
//         students: [{
//             id: 1,
//             name: 'Ashwin',
//             subjectPassed: 6,
//             subjectFailed: 0
//         },
//         {
//             id: 2,
//             name: 'Yuvaraj',
//             subjectPassed: 3,
//             subjectFailed: 3
//         },
//         {
//             id: 3,
//             name: 'Sujatha',
//             subjectPassed: 6,
//             subjectFailed: 0
//         },
//         {
//             id: 4,
//             name: 'Roopesh',
//             subjectPassed: 5,
//             subjectFailed: 1
//         }]
//     },
//     methods: {
//         showDetails(id) {
//             console.log(this.students[id].name)
//         }
//     },
//     computed: {
//         details() {
//             return this.staff.name
//         }
//     }
// })

// <!-- -------------------------------------------------------------------------------- -->

var app = new Vue({
    el: '#app',
    data: {
        title: "PHONE PRODUCT",
        models: [{ product: "iphone6", link: "#", see: true },
        { product: "iphone7", link: "#", see: true },
        { product: "iphone8", link: "#", see: true },
        { product: "iphoneX", link: "#", see: true }],
        stock: true
    },
    methods: {
        doSomething() {

        },
        printProduct(product) {
            console.log("Clicked" + " " + product)
        },
        removeProduct(productId) {
            this.models[productId].see = false
        }
    },
    computed: {
        generateSomething() {
            return this.title + ' ' + this.stock
        }
    }
})


