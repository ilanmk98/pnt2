<template>
   <div>
     <h1>Mis reservas</h1>
     <ul>
       <li v-for="comida in comidas" :key="comida.id">
         {{ comida.nombre }} - {{ comida.descripcion }}
       </li>
     </ul>
 
     <h2>Comidas disponibles</h2>
     <ul>
       <li v-for="comida in comidasParaAgregar" :key="comida.id">
         {{ comida.nombre }}
         <button @click="agregarComida(comida)">Agregar</button>
         <button @click="verDetalleComida(comida)">Ver detalles</button>
       </li>
     </ul>
   </div>
 </template>
 
 <script>
 export default {
   data() {
     return {
       comidas: [
         { id: 1, nombre: "Pizza", descripcion: "Una deliciosa pizza con queso y tomate",precio:1 },
         { id: 2, nombre: "Hamburguesa", descripcion: "Una jugosa hamburguesa con papas fritas",precio:12 },
       ],
       comidasParaAgregar: [
         { id: 3, nombre: "Sushi", descripcion: "Rollos de sushi frescos y variados",precio:1 },
         { id: 4, nombre: "Ensalada", descripcion: "Una ensalada fresca y saludable",precio:1 },
       ]
     };
   },
   methods: {
     agregarComida(comida) {
       // Agregar la comida seleccionada a la primera lista
       this.comidas.push(comida);
       // Eliminar la comida de la segunda lista
       this.comidasParaAgregar = this.comidasParaAgregar.filter(item => item.id !== comida.id);
     },
     verDetalleComida(comida) {
    this.$router.push({ name: 'detalle', params: { id: comida.id } });
  }
   }
 };
 </script>