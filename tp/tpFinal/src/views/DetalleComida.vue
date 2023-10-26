<template>
  <div>
    <!-- Botón para mostrar detalles de comida -->
    <button @click="mostrarDetallesComida = true">Ver Detalles</button>

    <!-- Componente de detalles de comida (modal) -->
    <div v-if="mostrarDetallesComida" class="modal">
      <div class="modal-content">
        <!-- Información de la comida -->
        <h2>{{ comida.name }}</h2>
        <p>{{ comida.description }}</p>
        <p>Cantidad disponible: {{ comida.quantity }}</p>

        <!-- Botón para cerrar el componente de detalles de comida -->
        <button @click="mostrarDetallesComida = false">Cerrar</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mostrarDetallesComida: false,
      comida: {
        id: 2,
        name: "Hamburguesa",
        description: "Jugosa hamburguesa",
        quantity: 0
      }
    };
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
  background: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
}
</style>
