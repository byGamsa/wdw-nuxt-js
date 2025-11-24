<template>
  <aside class="sidebar">
    <img :src="logo" alt="VueSocial Logo" />

    <nav class="menu">
      <div class="menu-item">
        <Home class="icon" />
        <span>Startseite</span>
      </div>
      <div class="menu-item">
        <Search class="icon" />
        <span>Suche</span>
      </div>
      <div class="menu-item">
        <Compass class="icon" />
        <span>Entdecken</span>
      </div>
      <div class="menu-item">
        <PlayCircle class="icon" />
        <span>Reels</span>
      </div>
      <div class="menu-item">
        <MessageCircle class="icon" />
        <span>Nachrichten</span>
      </div>
      <div class="menu-item">
        <Heart class="icon" />
        <span>Benachrichtigungen</span>
      </div>
      <div class="menu-item">
        <Plus class="icon" />
        <span>Erstellen</span>
      </div>
      <div class="menu-item">
        <BarChart3 class="icon" />
        <span>Dashboard</span>
      </div>
      <div class="menu-item active">
        <User class="icon" />
        <span>Profil</span>
      </div>
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
  BarChart3,
  User
} from 'lucide-vue-next'

import logo from '/VueSocial.png'
import '../assets/sidebar.css'
</script>