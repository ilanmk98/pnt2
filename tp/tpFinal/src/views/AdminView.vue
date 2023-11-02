<template>
    <div>
      <h1>Usuarios</h1>
      <ul>
        <li v-for="user in usuarios" :key="user.id">
          {{ user.username }} ({{ user.consumer ? 'Consumer' : 'No Consumer' }}) - Contacto: {{ user.contact }}
          <button @click="eliminarUsuario(user.id)">Eliminar</button>
          <button @click="abrirModalEditar(user)">Editar</button>
        </li>
      </ul>
      
      
      <div v-if="modalAbierto">
        <h2>Editar Usuario</h2>
        <input v-model="usuarioEditado.username" placeholder="Nombre de usuario"><br>
        <input v-model="usuarioEditado.contact" placeholder="Contacto"><br>
        <button @click="guardarCambios">Guardar Cambios</button>
        <button @click="cerrarModal">Cancelar</button>
      </div>
    </div>
  </template>
  <script>
   import axios from 'axios'
  export default {
    data(){
        return {usuarios:[],
            modalAbierto: false,
      usuarioEditado: {
        id: null,
        username: '',
        contact: '',
      },
      usuarioEnEdicion:{}
    }
        
    },
    async created(){
      this.cargarUsuarios()
    },
    methods: {
     cargarUsuarios(){
            this.traerUsuarios()
     },
     async traerUsuarios()
     {
        try {
         const response = await axios.get("https://653071246c756603295ea09b.mockapi.io/user")
         console.log(response.data);
         this.usuarios=response.data
        }
        catch (error)
        {console.error(error)}
     },
     eliminarUsuario(userId) {
     this.eliminarDeBd(userId)
    },
    async eliminarDeBd(userId)
    {
        try{
        await axios.delete(`https://653071246c756603295ea09b.mockapi.io/user/${userId}`)
        console.log("Eliminado de Bd");
        this.cargarUsuarios()
      }
      catch(error)
      {
        console.error(error)
      }
    },
    abrirModalEditar(user) {
      this.usuarioEditado.id = user.id;
      this.usuarioEditado.username = user.username;
      this.usuarioEditado.contact = user.contact;
      this.modalAbierto = true;
      this.usuarioEnEdicion=user;
    },
    guardarCambios() {
      this.usuarioEnEdicion.contact = this.usuarioEditado.contact;
      this.usuarioEnEdicion.username= this.usuarioEditado.username;
      this.editarEnBd()
     
      this.modalAbierto = false;
    },
    cerrarModal() {
      this.modalAbierto = false;
    },
    async editarEnBd()
    {
        try{
        await axios.put(`https://653071246c756603295ea09b.mockapi.io/user/${this.usuarioEditado.id}`,this.usuarioEnEdicion)
        console.log("editado en Bd");
        this.cargarUsuarios()
      }
      catch(error)
      {
        console.error(error)
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