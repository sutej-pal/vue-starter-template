import Vue from 'vue';
import Router from './router';
import Root from './components/root/root';

window.idpApp = new Vue({
  el: '#app',
  router: Router,
  components: {
    'root': Root
  },
  methods: { },
  mounted () {
    console.log('hi vue ');
  }
});
