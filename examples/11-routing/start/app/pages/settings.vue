<template>
  <div class="settings-container">
    
    <SettingsNav />

    <div class="settings-content">
      <NuxtPage />
    </div>

  </div>
</template>

<script setup>
import SettingsNav from '~/components/SettingsNav.vue'
import '../assets/settings.css' 
</script> 
