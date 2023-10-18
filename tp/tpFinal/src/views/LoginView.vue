<template>
   <div id="app">
        <div class="login-container">
            <h1>Iniciar Sesión</h1>
            <form @submit.prevent="login">
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
            <a class="btn-register" href="#">Registrarse</a>
        </div>
    </div>
</template>

<style>

</style>
 <script>
  export default {
  data() {
    return {
      usuario: '',
      contrasena: ''
    };
  },
  methods: {
    login() {
      if (this.usuario === 'usuario' && this.contrasena === 'contraseña') {
        
        console.log('Inicio de sesión exitoso');
        this.$router.push('/inicio');
        
      } else {
        
        console.error('Inicio de sesión fallido');
      }
    }
  }
};
      
    </script> 
