import Vue from 'vue'
import App from './App.vue'

console.log("main")

new Vue({
    render: (h) => h(App)
}).mount('#app')