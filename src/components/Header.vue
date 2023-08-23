<template>
  <header class="bg-blue-900 text-white">
    <div class="container mx-auto py-4 flex items-center justify-between">
      <div class="flex items-center">
        <img src="../assets/alumar-escudo.png" alt="Escudo del equipo" class="w-10 h-10 md:w-16 md:h-16" />
        <h1 class="text-xl md:text-2xl font-semibold ml-2 md:ml-4 font-serif">ALUMAR CF</h1>
      </div>
        <nav class="hidden md:flex space-x-6">
          <router-link to="/" class="hover:underline">Inicio</router-link>
          <router-link to="/plantilla" class="hover:underline">Plantilla</router-link>
          <router-link to="/noticias" class="hover:underline">Noticias</router-link>
          <router-link to="/calendario" class="hover:underline">Calendario</router-link>
          <router-link to="/tienda" class="hover:underline">Tienda</router-link>
        </nav>
        <div class="md:hidden">
          <button @click="toggleMenu" class="text-white">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
      <nav :class="{'hidden': !isMobileMenuOpen, 'md:flex md:space-x-4': true}" class="md:hidden fixed inset-0 bg-blue-900 bg-opacity-75 text-white p-4 flex justify-center items-center">
          <button @click="toggleMenu" class="absolute top-4 right-4 text-white">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
          <div class="flex flex-col items-center space-y-4">
            <router-link to="/" class="hover:underline">Inicio</router-link>
            <router-link to="/plantilla" class="hover:underline">Plantilla</router-link>
            <router-link to="/noticias" class="hover:underline">Noticias</router-link>
            <router-link to="/calendario" class="hover:underline">Calendario</router-link>
            <router-link to="/tienda" class="hover:underline">Tienda</router-link>
          </div>
        </nav>
    </header>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isMobileMenuOpen: false
      };
    },
    methods: {
      toggleMenu() {
        this.isMobileMenuOpen = !this.isMobileMenuOpen;
      }
    }
  };
  </script>
  
  <style scoped>
  /* Estilos específicos del componente Header */
  </style>
  