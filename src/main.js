import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'
import VueFire from 'vuefire'
import 'firebase/firestore'

Vue.config.productionTip = false
Vue.use(VueFire)

var config = {
  apiKey: "AIzaSyBb9MiRDHwjcYfV7u5izQzUMKhRGtX7EYI",
  authDomain: "classdojo-499fc.firebaseapp.com",
  databaseURL: "https://classdojo-499fc.firebaseio.com",
  projectId: "classdojo-499fc",
  storageBucket: "classdojo-499fc.appspot.com",
  messagingSenderId: "75366089662"
};
firebase.initializeApp(config);

export const db = firebase.firestore()
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
