<template>
    <div id="app">
<<<<<<< HEAD
        <div class="register-container">
            <h1 class="titulo-registro">Registrarse</h1>
            <form @submit="register">
                <div class="form-group">
                    <input type="text" placeholder="Usuario" v-model="usuario" required>
                </div>
                <div class="form-group">
                    <input type="password" placeholder="Contraseña" v-model="contrasena" required>
                </div>
                <div class="radio-group">
                    <label class="radio-label">
                        <input type="radio" name="tipo" id="restaurante"> Restaurante
                    </label>
                    <label class="radio-label">
                        <input type="radio" name="tipo" id="consumidor"> Consumidor
                    </label>
                </div>
                <div class="form-group">
                    <button class="btn-login" type="submit">Registrarse</button>
                </div>
            </form>
        </div>
    </div>
</template>
=======
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
>>>>>>> c2810e73bf95a23d27f5842cd09552e69b2e4b13
 
 <style scoped>
.register-container * {
        font-size: 50px; /* Aumentar el tamaño de fuente */
        text-align: center;
    }


    .radio-label {
        font-size: 40px; /* Tamaño de fuente para los radio buttons */
    }
    button {
        background-color: #10f136;
        color: #ffffff;
        padding: 10px 20px;
        border: none;
        cursor: pointer;
    }

    .titulo-registro {
        color: #10f136;
        
    }


   
 </style>
<script>
    import axios from 'axios'
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
            let user={};
            user.username=this.usuario;
            user.password=this.contrasena;
            user.consumer=this.tipo==='consumidor'?true:false;
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
            await axios.post("https://653071246c756603295ea09b.mockapi.io/usuarios",user)
            console.log("se guardo en bd");
        }
        catch (error)
        {console.log(error);}
    }
  }
};
     </script> 
 