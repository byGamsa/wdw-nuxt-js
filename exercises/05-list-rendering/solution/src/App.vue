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

  const isFollowing = ref(true)
  //const hasPosts = ref(false)

  const posts = ref([
  { id: 1, title: 'Neuer Rektor an der HdM!🎓✨', likes: 42, imageUrl: 'https://i.imgur.com/j5nf5PX.jpeg' },
  { id: 2, title: 'Herzlich Willkommen an der HdM, liebe Erstis! 🐥', likes: 27, imageUrl: 'https://i.imgur.com/0DOWte3.jpeg' },
  { id: 3, title: 'Wir sind live!🥳', likes: 88, imageUrl: 'https://i.imgur.com/LiKWF4M.jpeg' }
])

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
            <button v-if="!isFollowing" class="follow-btn" >
              Folgen
            </button>

            <button v-else class="unfollow-btn" >
              Gefolgt
            </button>

            <button  v-show="isFollowing" class="message-btn" >
              Nachricht senden
            </button>
          </div>
        </div>

        <div class="posts">
          <!-- Neuer Post-Bereich -->
          <p v-if="posts.length === 0">Noch keine Beiträge vorhanden</p>
          <div v-else class="post-list">
            <div v-for="post in posts" :key="post.id" class="post-card">
              <img :src="post.imageUrl" :alt="post.title"/>
              <div class="post-info">
                <span class="title">{{ post.title }}</span>
                <span class="likes">{{ post.likes }}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>