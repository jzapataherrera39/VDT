<template>
    <div class="container mx-auto p-4 text-center">
      <h1 class="text-2xl font-bold">Compra de Tickets para Almuerzo</h1>
      <p class="text-lg">Almuerzos disponibles: {{ almuerzosDisponibles }}</p>
      <button 
        @click="comprarAlmuerzo" 
        :disabled="almuerzosDisponibles <= 0"
        class="mt-4 px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-400">
        Comprar Almuerzo (1000 COP)
      </button>
    </div>
  </template>
  
  <script>
  import { mapState, mapActions } from "vuex";
  
  export default {
    computed: {
      ...mapState(["almuerzosDisponibles"])
    },
    methods: {
      ...mapActions(["comprarAlmuerzo"])
    }
  };
  </script>
  