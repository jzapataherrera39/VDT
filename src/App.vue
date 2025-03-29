<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <HelloWorld/>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>
<template>
  <div id="app">
    <h1>Sistema de Compra de Fichos</h1>
    <TicketCounter />
  </div>
</template>

<script>
import TicketCounter from './components/TicketCounter.vue';

export default {
  name: 'App',
  components: {
    TicketCounter
  }
};
</script>

<style>
.container {
    display: flex;
    justify-content: center;  /* Centra horizontalmente */
    align-items: center;      /* Centra verticalmente */
    height: 100vh;            /* Ocupa toda la altura de la pantalla */
    width: 100vw;             /* Ocupa toda la anchura */
    background: url('/home/jorge/Escritorio/Propuesta/VDT/src/assets/unicordoba.jpg') no-repeat center center;
    background-size: cover;   /* Asegura que la imagen cubra toda la pantalla */
}

#app {
  text-align: center;
  font-family: Arial, sans-serif;
  margin-top: 20px;

}
body {
    background-image: url('/home/jorge/Escritorio/Propuesta/VDT/src/assets/unicordoba.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
}
.ticket-counter {
  display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 400px;
    padding: 20px;
    background: rgba(255, 255, 255, 0.85);
    backdrop-filter: blur(10px);
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    text-align: center;
}

.ticket-counter h1 {
    font-size: clamp(1.5rem, 2vw, 2.5rem); /* Se ajusta según el tamaño de la pantalla */
    margin-bottom: 10px;
}

.ticket-counter button {
    padding: 10px 20px;
    font-size: clamp(1rem, 1.5vw, 1.2rem);
    border-radius: 5px;
    border: none;
    background-color: #007bff;
    color: white;
    cursor: pointer;
    transition: background 0.3s ease;
}

.ticket-counter button:hover {
    background-color: #0056b3;
}

/* 🌍 Media queries para pantallas más pequeñas */
@media (max-width: 768px) {
    .ticket-counter {
        width: 90%; /* Se ajusta al ancho del dispositivo */
        padding: 15px;
    }

    .ticket-counter h1 {
        font-size: 1.5rem;
    }

    .ticket-counter button {
        width: 100%; /* Botón ocupa todo el ancho en móviles */
    }
}

</style>
