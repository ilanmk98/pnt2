<template>
   <div id="app">
        <div class="login-container">
            <h1>Iniciar Sesión</h1>
            <form @submit="login">
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
