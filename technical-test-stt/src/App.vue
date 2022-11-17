<script setup>
import { ref, computed } from 'vue'
import Characters from './pages/Characters.vue';
import Home from './pages/Home.vue';
import NotFound from './pages/NotFound.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/characters', component: Characters },
]

// const currentPath = ref(window.location.hash)

// window.addEventListener('hashchange', () => {
//   currentPath.value = window.location.hash
// })

// const currentView = computed(() => {
//   console.log(currentPath.value.slice(1));
//   return routes[currentPath.value.slice(1) || '/'] || NotFound
// })


</script>

<template>
  <!-- <component :is="currentView" /> -->
  <router-view/>
</template>

<style>

</style>