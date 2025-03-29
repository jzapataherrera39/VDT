<template>
  <v-container fluid class="bg">
    <v-row justify="center">
      <v-col cols="12" md="8">
        <v-card class="text-center pa-5">
          <v-card-title class="headline">
            🎟️ Sistema de Compra de Fichos - UNICOR
          </v-card-title>
          <v-divider></v-divider>

          <!-- Cafetería de Salud -->
          <v-card class="mt-5 pa-4">
            <v-img src="/home/jorge/Escritorio/Propuesta/VDT/src/assets/unicor.jpeg" height="100px" contain></v-img>
            <h2 class="mt-3">Cafetería de Salud</h2>
            <p>Vendidos: {{ vendidosSalud }} / 800</p>
            <v-progress-linear
              color="blue lighten-2"
              :value="(vendidosSalud / 800) * 100"
              height="25"
            ></v-progress-linear>
            <p>Disponibles: {{ 800 - vendidosSalud }} / 800</p>
            <v-btn
              class="mt-3"
              color="primary"
              :disabled="vendidosSalud >= 800"
              @click="comprarFicho('salud')"
            >
              Comprar en Salud
            </v-btn>
          </v-card>

          <!-- Cafetería Central -->
          <v-card class="mt-5 pa-4">
            <v-img src="https://upload.wikimedia.org/wikipedia/commons/d/d7/Universidad_de_Córdoba%2C_Monter%C3%ADa%2C_Colombia.jpg" height="100px" contain></v-img>
            <h2 class="mt-3">Cafetería Central</h2>
            <p>Vendidos: {{ vendidosCentral }} / 1200</p>
            <v-progress-linear
              color="green lighten-2"
              :value="(vendidosCentral / 1200) * 100"
              height="25"
            ></v-progress-linear>
            <p>Disponibles: {{ 1200 - vendidosCentral }} / 1200</p>
            <v-btn
              class="mt-3"
              color="success"
              :disabled="vendidosCentral >= 1200"
              @click="comprarFicho('central')"
            >
              Comprar en Central

              
            </v-btn>
          </v-card>

          <!-- Mensaje de error -->
          <v-alert v-if="mensajeError" type="error" class="mt-3">
            {{ mensajeError }}
          </v-alert>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      vendidosSalud: 0,
      vendidosCentral: 0,
      mensajeError: ""
    };
  },
  methods: {
    comprarFicho(cafeteria) {
      if (cafeteria === "salud" && this.vendidosSalud < 800) {
        this.vendidosSalud++;
      } else if (cafeteria === "central" && this.vendidosCentral < 1200) {
        this.vendidosCentral++;
      } else {
        this.mensajeError = "Lo lamentamos, no hay fichos disponibles en esta cafetería.";
        setTimeout(() => (this.mensajeError = ""), 3000);
      }
    }
  }
};
</script>

<style scoped>
.bg {
  background-image: url("https://upload.wikimedia.org/wikipedia/commons/3/36/Universidad_de_C%C3%B3rdoba_Monter%C3%ADa.jpg");
  background-size: cover;
  background-position: center;
  height: 100vh;
}

</style>
