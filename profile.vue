<template>
    <div max-width="100%">
    <v-card
      class="ma-2 mb-4"
      color="grey lighten-5"
      outlined
    >
      <v-img
        src=""
        height="200px"
      ></v-img>
  
      <v-card-title>
        <h5>Vee fit</h5>
      </v-card-title>
  
      <v-card-subtitle>
        Programmer<br>
      </v-card-subtitle>
      
  
    </v-card>
    </div>
  </template>
  
  <script>
    export default {
      data: () => ({
        show: false,
        recent: [
          {
            active: true,
            avatar: 'https://w7.pngwing.com/pngs/87/586/png-transparent-next-js-hd-logo.png',
            title: 'Next JS',
          }
        ],
        previous: [{
          title: 'Travis Howard',
          avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
        }],
      }),
    }
  </script>
  