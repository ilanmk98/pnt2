<template>
   <div>
     <h1>Mis reservas</h1>
     <ul>
       <li v-for="comida in comidas" :key="comida.id">
         {{ comida.name }} - {{ comida.description }} - Precio: {{ comida.price }}
       </li>
     </ul>
 
     <h2>Comidas disponibles</h2>
     <ul>
       <li v-for="comida in comidasParaAgregar" :key="comida.id">
         {{ comida.name }} - Precio: {{ comida.price }}
         <button @click="agregarComida(comida)">Agregar</button>
         <button @click="verDetalleComida(comida)">Ver detalles</button>

        <div v-if="comida.mostrarDescripcion">
          <p>{{ comida.descripcion }}</p>
        </div>
      </li>
     </ul>
   </div>
 </template>
 
 <script>
 import axios from 'axios'
 export default {
  async created() {
    const user = JSON.parse(this.$route.params.user);
    console.log(user.username);
    this.cargarLista()
  },
   data() {
     return {
       comidas: [],
       comidasParaAgregar: []
     };
   },
   methods: {
     agregarComida(comida) {
      const user = JSON.parse(this.$route.params.user);
      console.log(user.username);
       this.comidas.push(comida);
       this.comidasParaAgregar = this.comidasParaAgregar.filter(item => item.id !== comida.id);
     },
     verDetalleComida(comida) {

    this.$router.push({ name: 'detalle', params: { id: comida.id } });
  },
  async cargarLista(){
        try {
         const response = await axios.get("https://653071246c756603295ea09b.mockapi.io/food")
         this.comidasParaAgregar=response.data
         console.log(this.comidasParaAgregar)
         
        }
        catch (error)
        {console.error(error)}

    }
   }
 };
 </script>