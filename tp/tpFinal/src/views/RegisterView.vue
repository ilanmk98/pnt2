<template>
    <div id="app">

         <div class="register-container">
             <h1 class="titulo-registro">Registrarse</h1>
             <form @submit.prevent="register">
                 <div class="form-group">
                     <input type="text" placeholder="Usuario" v-model="usuario" required>
                 </div>
                 <div class="form-group">
                     <input type="password" placeholder="Contraseña" v-model="contrasena" required>
                 </div>
                 <div>
                    <input type="radio" name="tipo" id="restaurante" v-model="tipo" value="restaurante"> Restaurante
                    <input type="radio" name="tipo" id="consumidor" v-model="tipo" value="consumidor"> Consumidor
                 </div>
                  
                <div class="form-group" v-if="tipo === 'restaurante'">
                 <input type="text" placeholder="Dirección" v-model="contacto">
                </div>
       
                <div class="form-group" v-if="tipo === 'consumidor'">
                <input type="text" placeholder="Teléfono" v-model="contacto">
                </div>
                 <div class="form-group">
                     <button class="btn-login" type="submit">Registrarse</button>
                 </div>
             </form>
             
         </div>
     </div>
 </template>

 
<script>
    import axios from 'axios'
    export default {
  data() {
    return {
      usuario: '',
      contrasena: '',
      tipo:'',
      contacto:''
    };
  },
  methods: {
    register() {
        
        if(this.usuario&&this.contrasena&&this.tipo)
        {
            let user={};
            user.username=this.usuario;
            user.password=this.contrasena;
            user.consumer=this.tipo==='consumidor'?true:false;
            user.contact=this.contacto;
            console.log(user)
            this.agregar(user)
            this.$router.push('/login');
            alert(this.usuario+" se registro correctamente como "+this.tipo);
            
        }
        else
        {
            alert("Ingrese el tipo de usuario")
        }
     
    },
    async agregar(user){
        try{
            await axios.post("https://653071246c756603295ea09b.mockapi.io/user",user)
            console.log("se guardo en bd");
        }
        catch (error)
        {console.log(error);}
    }
  }
};
     </script> 
 