<template>
      <div class="app">
        <!-- Sidebar Bereich -->
        <Sidebar />

        <!-- Hauptinhalt -->
        <NuxtPage /> 
      </div>
</template>

<script setup>
    import Sidebar from '../components/Sidebar.vue'
</script>