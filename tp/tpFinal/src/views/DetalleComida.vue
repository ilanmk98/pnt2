<template>
    <div>
      <h2>Detalles de la Comida</h2>
      <p>Nombre: {{ comida.nombre }}</p>
      <p>Descripción: {{ comida.descripcion }}</p>
      <button @click="agregarComida">Agregar a la lista</button>
      <button @click="volverALista">Volver a la lista</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        comida: {}
      };
    },
    methods: {
      agregarComida() {
        console.log('Comida agregada a la lista');
        this.$router.push({ name: 'comidas' });
      },
      volverALista() {
        
        this.$router.push({ name: 'comidas' });
      }
    },
    created() {
     
      const comidaId = this.$route.params.id;
      this.comida = this.comidas.find(comida => comida.id == comidaId);
    }
  };
  </script>
  