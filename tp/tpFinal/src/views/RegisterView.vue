<template>
    <div id="app">
         <div class="register-container">
             <h1 class="titulo-registro">Registrarse</h1>
             <form @submit="register">
                 <div class="form-group">
                     <input type="text" placeholder="Usuario" v-model="usuario" required>
                 </div>
                 <div class="form-group">
                     <input type="password" placeholder="Contraseña" v-model="contrasena" required>
                 </div>
                 <div>
                    <input type="radio" name="tipo" id="restaurante"> Restaurante
                    <input type="radio" name="tipo" id="consumidor"> Consumidor
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
 <!-- <script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js">
    
         new Vue({
             el: '#app',
             data: {
                 usuario: '',
                 contrasena: ''
             },
             methods: {
                 login() {
                     // Aquí puedes agregar la lógica para manejar la autenticación del usuario.
                     // Por ejemplo, puedes hacer una solicitud AJAX para verificar las credenciales.
                     // También puedes utilizar una biblioteca de enrutamiento para Vue.js para navegar a otras páginas.
                 }
             }
         });
     </script> -->
 