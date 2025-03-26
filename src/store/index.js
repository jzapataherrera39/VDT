import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    almuerzosDisponibles: 1000
  },
  mutations: {
    COMPRAR_ALMUERZO(state) {
      if (state.almuerzosDisponibles > 0) {
        state.almuerzosDisponibles--;
      }
    }
  },
  actions: {
    comprarAlmuerzo({ commit }) {
      commit("COMPRAR_ALMUERZO");
    }
  }
});
