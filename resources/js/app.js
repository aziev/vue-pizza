import Vue from 'vue';

//register component
// Vue.component('index', require('./components/Index.vue').default);

import Index from './components/Index';

const app = new Vue({
    el: '#app',
    components: {
        Index,
    },
});