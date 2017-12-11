import Vue from 'vue';
import PhotoApp from './PhotoApp.vue'

new Vue({
  el: '#app',
  components: {
    'app': PhotoApp,
  },
  template: `<app></app>`
});
