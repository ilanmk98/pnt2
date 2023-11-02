<template>
   <div id="app">
        <div class="login-container">
            <h1>Iniciar Sesión</h1>
            <form @submit.prevent="cargarLista">
                <div class="form-group">
                    <input type="text" placeholder="Usuario" v-model="usuario" required>
                </div>
                <div class="form-group">
                    <input type="password" placeholder="Contraseña" v-model="contrasena" required>
                </div>
                <div class="form-group">
                    <button class="btn-login" type="submit">Ingresar</button>
                </div>
            </form>
            <a class="btn-forgot-password" href="/olvidasteContrasena">¿Olvidaste tu contraseña?</a>
            <br>
            <a class="btn-register" href="/register">Registrarse</a>
        </div>
    </div>
</template>

<style>

</style>
 <script>
 import axios from 'axios'
import router from '../router';
  export default {
  data() {
    return {
      usuario: '',
      contrasena: ''
    };
  },
  methods: {
    login(param) {
      const usuarioExiste = param.find(user=>user.username===this.usuario)
      if(this.usuario==='admin'&&this.contrasena==='admin')
      {
        this.$router.push('/admin')
      }
        
      else if (usuarioExiste&&usuarioExiste.password==this.contrasena) {
        
        if(usuarioExiste.consumer)
        { 
        console.log(usuarioExiste)
        console.log('Inicio de sesión Consumer');
        const pasoPorParam = JSON.stringify(usuarioExiste.id)
        this.$router.push({ name: 'inicioConsumidor', params:  {user: pasoPorParam}  });
      }
        else
        { 
            console.log('Inicio de sesión Restaurante');
            const pasoPorParam = JSON.stringify(usuarioExiste.id)
            this.$router.push({ name: 'inicioRestaurante', params:  {user: pasoPorParam}  });
        }
       
      } else {
        alert('Inicio de sesion fallido')
        console.error('Inicio de sesión fallido');
      }
    },
    async cargarLista(){
        try {
         const response = await axios.get("https://653071246c756603295ea09b.mockapi.io/user")
         this.users=response.data;
         this.login(this.users)
        }
        catch (error)
        {console.error(error)}
    }

  }
};
      
    </script> 
