<template>
<div>
    <h1>Usuarios</h1>
    <ul>
      <li v-for="user in usuarios" :key="user.id">
        {{ user.username }} ({{ user.consumer ? 'Consumer' : 'No Consumer' }}) - Contacto: {{ user.contact }}
      </li>
    </ul>
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
        comida.restaurantid=Number(user)
        console.log(comida)
        this.agregarABD(comida)
        
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
      this.comidasPublicadas.push(comida);
      this.comidasParaAgregar = this.comidasParaAgregar.filter(item => item.id !== comida.id);
    },
    async cargarComidas(){
      const response = await axios.get("https://653071246c756603295ea09b.mockapi.io/food")
      const user = JSON.parse(this.$route.params.user);
      const comidas = response.data
      console.log(comidas);
      const comidasRest = comidas.filter(comida=>comida.restaurantid==user)
      console.log(comidasRest);
      this.comidasPublicadas=comidasRest

    },
    eliminarComidaPublicada(comida){
        this.eliminardeBd(comida.id)
    },
    async eliminardeBd(idComida){
      try{
        await axios.delete(`https://653071246c756603295ea09b.mockapi.io/food/${idComida}`)
        console.log("Eliminado de Bd");
        this.cargarComidas()
      }
      catch(error)
      {
        console.error(error)
      }
        
    },
  }
};
</script>