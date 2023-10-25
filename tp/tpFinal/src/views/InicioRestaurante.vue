<template>
    <div>
      <h1>Mis comidas publicadas</h1>
      <li v-for="comida in comidasPublicadas" :key="comida.id">
         {{ comida.nombre }} - {{ comida.descripcion }}
       </li>
    
       <h2>Comidas disponibles para publicar</h2>
     <ul>
       <li v-for="comida in comidasParaAgregar" :key="comida.id">
         {{ comida.nombre }}
         <button @click="agregarComida(comida)">Agregar</button>
       </li>
     </ul>
   </div>

  </template>
  <script>
  export default {
    data() {
      return {
        comidasPublicadas: [
          { id: 1, nombre: "Fideos a la bolognesa", descripcion: "Riquisimos fideos del tano",precio:1 },
          { id: 2, nombre: "Hamburguesa", descripcion: "Una jugosa hamburguesa con papas fritas",precio:12 },
        ],
        comidasParaAgregar: [
          { id: 3, nombre: "Bife de chorizo", descripcion: "Riquisimo en proteina",precio:1 },
          { id: 4, nombre: "Flan con DDL", descripcion: "Postre extraordinario",precio:1 },
        ]
      };
    },
    methods: {
      agregarComida(comida) {
        // Agregar la comida seleccionada a la primera lista
        this.comidasPublicadas.push(comida);
        // Eliminar la comida de la segunda lista
        this.comidasParaAgregar = this.comidasParaAgregar.filter(item => item.id !== comida.id);
      },
    }
  };
  </script>