<template>
  <div class="bg-gray-100">
    <Header />
    
    <router-view />
    
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    Header,
    Footer
  }
};
</script>

<style>
/* Estilos globales */
</style>
