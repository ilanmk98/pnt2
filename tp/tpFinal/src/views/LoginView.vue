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
            <a class="btn-forgot-password" href="#">¿Olvidaste tu contraseña?</a>
            <br>
            <a class="btn-register" href="/register">Registrarse</a>
        </div>
    </div>
</template>

<style>

</style>
 <script>
 import axios from 'axios'
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

      if (usuarioExiste&&usuarioExiste.password==this.contrasena) {
        if(usuarioExiste.consumer)
        { console.log('Inicio de sesión Consumer');
        this.$router.push('/inicioConsumidor');}
        else
        { 
            console.log('Inicio de sesión Restaurante');
            this.$router.push('/inicioRestaurante');
        }
       
      } else {
        alert('Inicio de sesion fallido')
        console.error('Inicio de sesión fallido');
      }
    },
    async cargarLista(){
        try {
         const response = await axios.get("https://653071246c756603295ea09b.mockapi.io/usuarios")
         this.users=response.data;
         this.login(this.users)
        }
        catch (error)
        {console.error(error)}
    }

  }
};
      
    </script> 
