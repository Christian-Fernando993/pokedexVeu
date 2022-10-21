// import Vue from 'vue';
// import App from './App.vue';
// import router from './router';

// Vue.config.productionTip = false;

// new Vue({
//     router,
//     render: h => h(App)
// }).$mount('#app')





import { createApp } from 'vue'
import App from './App.vue'
import Home from './views/Home.vue';



createApp(App).mount('#app')
createApp(Home).mount('#home')