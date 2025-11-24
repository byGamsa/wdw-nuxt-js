<template>
  <aside class="sidebar">
    <img :src="logo" alt="VueSocial Logo" class="sidebar-logo" />

    <nav class="menu">
      <!-- Startseite -->
      <NuxtLink to="/" class="menu-item" active-class="active">
        <Home class="icon" />
        <span>Startseite</span>
      </NuxtLink>

      <!-- Suche -->
      <div class="menu-item">
        <Search class="icon" />
        <span>Suche</span>
      </div>

      <!-- Entdecken -->
      <div class="menu-item">
        <Compass class="icon" />
        <span>Entdecken</span>
      </div>

      <!-- Reels -->
      <div class="menu-item">
        <PlayCircle class="icon" />
        <span>Reels</span>
      </div>

      <!-- Nachrichten -->
      <div class="menu-item">
        <MessageCircle class="icon" />
        <span>Nachrichten</span>
      </div>

      <!-- Benachrichtigungen -->
      <div class="menu-item">
        <Heart class="icon" />
        <span>Benachrichtigungen</span>
      </div>

      <!-- Erstellen -->
      <div class="menu-item">
        <Plus class="icon" />
        <span>Erstellen</span>
      </div>

      <!-- Einstellungen -->
      <NuxtLink to="/settings" class="menu-item" active-class="active">
        <Settings class="icon" />
        <span>Settings</span>
      </NuxtLink>

      <!-- Profil (dynamisch) -->
      <NuxtLink
        :to="`/profile/${defaultUser}`"
        class="menu-item"
        active-class="active"
      >
        <User class="icon" />
        <span>Profil</span>
      </NuxtLink>
    </nav>

    <footer class="sidebar-footer">
      <p>© 2025 VueSocial</p>
    </footer>
  </aside>
</template>

<script setup>
import {
  Home,
  Search,
  Compass,
  PlayCircle,
  MessageCircle,
  Heart,
  Plus,
  User,
  Settings
} from 'lucide-vue-next'

import logo from '/VueSocial.png'
import '../assets/sidebar.css'

// Standard-Nutzername für Sidebar-Link
const defaultUser = 'hdm.stuttgart'
</script>
