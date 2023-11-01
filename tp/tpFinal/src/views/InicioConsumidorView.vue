<template>
   <div>
     <h1>Mis reservas</h1>
     <ul>
       <li v-for="comida in comidas" :key="comida.id">
        <div>
          {{ comida.name }} - {{ comida.description }} - Precio: {{ comida.price }}
        </div>
         
       </li>
     </ul>
 
     <h2>Comidas disponibles</h2>
     <ul>
       <li v-for="comida in comidasParaAgregar" :key="comida.id">
        <div v-if="comida.quantity>0">
         {{ comida.name }}
         <button @click="agregarComida(comida)">Agregar</button>
         <button @click="verDetalleComida(comida)">Ver detalles</button>
        </div>
         <div v-if="comida.mostrarDescripcion" class="modal">
          <div class="modal-content">
            <h3>Detalles de {{ comida.name }}</h3>
            <h3>{{ comida.description }}</h3>
            <h3>Cantidad:{{ comida.quantity }}</h3>
            <h3>Precio:{{ comida.price }}$</h3>
            <button @click="comida.mostrarDescripcion = false">Cerrar</button>
          </div>
        </div>
      </li>
     </ul>
   </div>
 </template>
 
 <script>
 import axios from 'axios'
 export default {
  async created() {
    this.cargarListaAgregar()
    this.cargarComidasUsuario()
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
       this.restarUnidad(comida)
       this.guardarComidaUsuario(comida,user)
       
     },
     verDetalleComida(comida) {

      comida.mostrarDescripcion = true;
  },

  async restarUnidad(comidaActualizada) {
    console.log(comidaActualizada);
    comidaActualizada.quantity=comidaActualizada.quantity-1;
    console.log(comidaActualizada);
  try {
    const url = `https://653071246c756603295ea09b.mockapi.io/food/${comidaActualizada.id}`;
    const response = await axios.put(url, comidaActualizada);
    return response.data;
  } catch (error) {
    throw error;
  }
},
  async cargarListaAgregar(){
        try {
         const response = await axios.get("https://653071246c756603295ea09b.mockapi.io/food")

         this.comidasParaAgregar=response.data
         this.comidasParaAgregar=this.comidasParaAgregar.filter(comida=>comida.quantity>0)
         
        }
        catch (error)
        {console.error(error)}
    },
    async cargarComidasUsuario(){
      try{
        const response = await axios.get("https://653997c3e3b530c8d9e88826.mockapi.io/pnt2/foodbyuser")
        this.foodbyuser = response.data
        const user = JSON.parse(this.$route.params.user);
        let userfoods = this.foodbyuser.filter(fbu=>fbu.userid===user.id)
        userfoods = userfoods.map(userfood=>userfood.foodid)
        const response2 = await axios.get("https://653071246c756603295ea09b.mockapi.io/food")
        this.totalcomidas=response2.data
        this.comidas=this.totalcomidas.filter(comida=>userfoods.includes(comida.id))
        
      }
      catch (error)
      {
        console.log(error);
      }
    },
    async guardarComidaUsuario(comida,user)
    {
      console.log(comida);
      console.log(user);
      const foodbyid={}
      foodbyid.foodid=comida.id
      foodbyid.userid=user.id
      console.log(foodbyid);
      try
      {
        await axios.post("https://653997c3e3b530c8d9e88826.mockapi.io/pnt2/foodbyuser",foodbyid)
        console.log("se guardo");
      }
      catch (error)
      {
        console.log(error)
      }
    }
   }
 };
 </script>
 <style>
 .modal {
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   background: rgba(0, 0, 0, 0.5);
   display: flex;
   justify-content: center;
   align-items: center;
   z-index: 1000;
 }
 
 .modal-content {
   background: black;
   padding: 20px;
   border-radius: 5px;
   box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
 }
 </style>