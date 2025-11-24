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

    <!-- Settings Card  -->
    <div class="settings-card">
      <div class="meta-header">
        <Info class="meta-icon" />
        <h3 class="card-title">Kontenübersicht</h3>
      </div>

      <p class="card-text">
        Verwalte deine verknüpften Funktionen und Kontoeinstellungen für Vue-Social.
      </p>
 
      <div class="card-more">
        Mehr dazu in der Kontenübersicht
      </div>
    </div>

    <!-- Tabs -->
    <div class="settings-item">
      <User class="icon" />
      Profil bearbeiten
    </div>

    <div class="settings-item">
      <Lock class="icon" />
      Account
    </div>

    <div class="settings-item">
      <Shield class="icon" />
      Datenschutz
    </div>

    <div class="settings-item">
      <Bell class="icon" />
      Benachrichtigungen
    </div>

  </nav>
</template>
