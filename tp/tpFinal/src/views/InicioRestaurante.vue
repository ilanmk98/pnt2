<template>
  <div>
    <h1>Mis comidas publicadas</h1>
    <li v-for="comida in comidasPublicadas" :key="comida.id">
       {{ comida.name }} - {{ comida.description }} - {{ comida.quantity }}
     </li>
  
    
   <h2>Agregar Comidas</h2>
       <input v-model="comida.name" placeholder="nombre"><br>
       <input v-model="comida.description" placeholder="descripcion"><br>
       <input v-model="comida.price" placeholder="precio" type="number">
       <input v-model="comida.quantity" placeholder="cantidad" type="number">
       <button @click="agregarComidaNueva(comida)">Agregar</button>
 </div>

</template>
<script>
 import axios from 'axios'
export default {
  async created(){
    this.cargarComidas()
  },
  data() {
    return {
      comida:{
      name: '', 
      description:'', 
      price:null, 
      //userID: '',
      quantity: null },
      comidasPublicadas: []
    };
  },
  methods: {
    agregarComidaNueva (comida){
      console.log({comida});
        console.log(this.$route.params.user);
        this.comidasPublicadas.push(comida)
        const user = JSON.parse(this.$route.params.user);
        comida.restaurantid=Number(user.id)
        console.log(comida)
        this.agregarABD(comida)
        alert(comida + " se agrego correctamente como "+ this.nombre);
        
        comida = {name:'', 
        description:'',
        price: '',
        restaurantId:'',
        quantity:''}
      },
    async agregarABD(comida){
      try{
          await axios.post("https://653071246c756603295ea09b.mockapi.io/food", comida)
          console.log("se guardo en bd");
        }
        catch(error){
          console.log(error);
        }
    },
    agregarComida(comida) {
      // Agregar la comida seleccionada a la primera lista
      this.comidasPublicadas.push(comida);
      // Eliminar la comida de la segunda lista
      this.comidasParaAgregar = this.comidasParaAgregar.filter(item => item.id !== comida.id);
    },
    async cargarComidas(){
      const response = await axios.get("https://653071246c756603295ea09b.mockapi.io/food")
      const user = JSON.parse(this.$route.params.user);
      const comidas = response.data
      console.log(comidas);
      const comidasRest = comidas.filter(comida=>comida.restaurantid==user.id)
      console.log(comidasRest);
      this.comidasPublicadas=comidasRest

    },
  }
};
</script>