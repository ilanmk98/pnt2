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
        </div>
    </div>
</template>


<script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js">
    
        new Vue({
            el: '#app',
            data: {
                usuario: '',
                contrasena: ''
            },
            methods: {
                login() {
                   
                }
            }
        });
    
</script>

