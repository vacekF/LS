import Vue from 'vue'
import Vuex from 'vuex'
import core from 'simple-core/core-store'
import assessment from 'simple-assessment/assessment-store'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    core: core,
    assessment: assessment
  }
})
