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

const route = useRoute()

if(route.path === '/settings') { 
  navigateTo('/settings/profile')
} 
</script> 
