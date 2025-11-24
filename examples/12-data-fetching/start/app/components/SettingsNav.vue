<script setup>
import {
  User,
  Lock,
  Shield,
  Bell,
  Info
} from 'lucide-vue-next'

import '../assets/settings.css'
</script> 

<template>
  <nav class="settings-nav">

    <h2 class="settings-title">Einstellungen</h2>

    <div class="settings-card">
      <div class="meta-header">
        <Info class="meta-icon" />
        <h3 class="card-title">Kontenübersicht</h3>
      </div>

      <p class="card-text">
        Verwalte deine verknüpften Funktionen und Kontoeinstellungen für Vue-Social.
      </p> 

      <NuxtLink to="#" class="card-more">Mehr dazu in der Kontenübersicht</NuxtLink>
    </div>

    <NuxtLink to="/settings/profile" class="settings-item">
      <User class="icon" />
      Profil bearbeiten
    </NuxtLink>

    <NuxtLink to="/settings/account" class="settings-item">
      <Lock class="icon" />
      Account
    </NuxtLink>

    <NuxtLink to="/settings/privacy" class="settings-item">
      <Shield class="icon" />
      Datenschutz
    </NuxtLink>

    <NuxtLink to="/settings/notifications" class="settings-item">
      <Bell class="icon" />
      Benachrichtigungen
    </NuxtLink>

  </nav>
</template>
