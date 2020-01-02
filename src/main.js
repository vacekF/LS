import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import storePlugin from './storePlugin'

Vue.config.productionTip = false
Vue.component('content-block', () => { return (process.env.NODE_ENV === 'development') ? import('simple-editing/dev/ContentBlock') : import('simple-editing/prod/ContentBlock') })
Vue.component('content-element', () => { return (process.env.NODE_ENV === 'development') ? import('simple-editing/dev/ContentElement') : import('simple-editing/prod/ContentElement') })
Vue.component('page', () => { return import('./components/global/Page') })
Vue.component('panel', () => { return import('./components/global/Panel') })
Vue.component('svg-container', () => { return import('./components/global/SvgContainer') })
Vue.use(storePlugin)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
