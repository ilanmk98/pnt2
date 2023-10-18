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
                 <div class="form-group">
                     <button class="btn-login" type="submit">Registrarse</button>
                 </div>
             </form>
             
         </div>
     </div>
 </template>
 
 <style scoped>
  input {
        border: 1px solid #ccc;
        padding: 10px;
    }

    button {
        background-color: #10f136;
        color: #ffffff;
        padding: 10px 20px;
        border: none;
        cursor: pointer;
    }
    .titulo-registro{
        color: #10f136;
    }
 </style>
<script>
    
    export default {
  data() {
    return {
      usuario: '',
      contrasena: '',
      tipo:''
    };
  },
  methods: {
    register() {
        if(this.usuario&&this.contrasena&&this.tipo)
        {
            this.$router.push('/login');
            alert(this.usuario+" se registro correctamente como "+this.tipo);
            
        }
        else
        {
            alert("Ingrese el tipo de usuario")
        }
     
    }
  }
};
     </script> 
 