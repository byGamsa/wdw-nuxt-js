<script setup>
  import Sidebar from './components/Sidebar.vue'
  import PostList from './components/PostList.vue'
  import PostOverlay from './components/PostOverlay.vue'

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

  const posts = ref([
  { id: 1, title: 'Neuer Rektor an der HdM!🎓✨', likes: 42, imageUrl: 'https://i.imgur.com/j5nf5PX.jpeg' },
  { id: 2, title: 'Herzlich Willkommen an der HdM, liebe Erstis! 🐥', likes: 27, imageUrl: 'https://i.imgur.com/0DOWte3.jpeg' },
  { id: 3, title: 'Wir sind live!🥳', likes: 88, imageUrl: 'https://i.imgur.com/LiKWF4M.jpeg' }
  ])

  function toggleFollow() {
    isFollowing.value = !isFollowing.value
    stats.value.followers += isFollowing.value ? 1 : -1
  }

  const selectedPost = ref(null)

  function openPost(post) {
    selectedPost.value = post
  }

  function closePost() {
    selectedPost.value = null
  }

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
            <button v-if="!isFollowing" class="follow-btn" @click="toggleFollow()">
              Folgen
            </button>

            <button v-else class="unfollow-btn" @click="toggleFollow()">
              Gefolgt
            </button>

            <button  v-show="isFollowing" class="message-btn" >
              Nachricht senden
            </button>
          </div>
        </div>

        <!-- PostList-Komponente -->
        <PostList :posts="posts" @select-post="openPost" />

        <!-- Overlay-Container -->
        <PostOverlay v-if="selectedPost" :post="selectedPost" :avatarImageRef="avatarImageRef" :username="username" @close="closePost" />
      </section>
    </main>
  </div>
</template>