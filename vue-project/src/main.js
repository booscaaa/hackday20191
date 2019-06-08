import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.config.productionTip = false

const opts = {
  icons: {
    iconfont: 'mdi'
  },
  theme: {
    dark: false,
    themes: {
      light: {
        nav: '#f2efef',
        primary: '#ffffff',
        secondary: '#FD940A',
        tertiary: '#1CBED4',
        quaternary: '#53AC56',
        white: '#ffffff',
        contrawhite: '#232121'
      },
      dark: {
        nav: '#424242',
        primary: '#C45C5C',
        secondary: '#FD940A',
        tertiary: '#1CBED4',
        quaternary: '#53AC56',
        white: '#232121',
        contrawhite: '#ffffff'
      }
    }
  }
}
Vue.use(Vuetify, opts)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  vuetify: new Vuetify(opts),
  components: { App },
  template: '<App/>'
})
