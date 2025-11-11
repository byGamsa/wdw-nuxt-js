<script setup>
  import Sidebar from './components/Sidebar.vue'

  import { ref } from 'vue'
  import avatarImage from '/hdmLogo.jpg'

  const username = ref('hdm.stuttgart')
  const fullname = ref('Hochschule der Medien (HdM)')
  const stats = ref({
    posts: 0,
    followers: 15300,
    following: 134
  })
  const description = ref(`Offizieller Instagram-Account der #hdmstuttgart 📱
Hinweise: www.hdm-stuttgart.de/datenschutz#instagram
Impressum: www.hdm-stuttgart.de/impressum`)

  const avatarImageRef = ref(avatarImage)

  const socialLink  = ref('https://www.hdm-stuttgart.de/quicklinks/')   
</script>

<template>
  <div class="app">
    <!-- Sidebar -->
    <Sidebar />

    <!-- Main Content -->
    <main class="main-content">
      <section class="profile">

        <div class="profile-info">
          <div class="profile-header">
            <img v-bind:src="avatarImageRef" alt="Profilbild" class="avatar" />

            <div class="text-info">
              <h2 class="username">{{ username }}</h2>
              <p class="fullname">{{ fullname }}</p>

              <div class="stats">
                <span><strong>{{ stats.posts }}</strong> Beiträge</span>
                <span><strong>{{ stats.followers }}</strong> Follower</span>
                <span><strong>{{ stats.following }}</strong> Gefolgt</span>
              </div>
            </div>
          </div>

          <div class="description">
            {{ description }}
          </div>

          <a v-bind:href="socialLink" target="_blank" class="social-link">
            www.hdm-stuttgart.de/quicklinks
          </a>

          <div class="action-buttons"> 
            <button class="follow-btn">
              Folgen
            </button>

            <button class="unfollow-btn">
              Gefolgt
            </button>

            <button class="message-btn">
              Nachricht senden
            </button>
          </div>
        </div>

        <div class="posts">
          <!-- Neuer Post-Bereich -->
        </div>
      </section>
    </main>
  </div>
</template>