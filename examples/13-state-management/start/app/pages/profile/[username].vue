<script setup>
import Sidebar from '../../components/Sidebar.vue'
import PostList from '../../components/PostList.vue'
import PostOverlay from '../../components/PostOverlay.vue'

import { ref } from 'vue'
import { useRoute } from 'vue-router'
import avatarImage from '/hdmLogo.jpg'

import '../index.css'

const route = useRoute()
const username = ref(route.params.username)

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
const socialLink = ref('https://www.hdm-stuttgart.de/quicklinks/')
const isFollowing = ref(true)

const posts = ref([
  { id: 1, title: 'Ab sofort könnt ihr vor dem Zitronenschnitz Sonne tanken! ☀️', likes: 42, imageUrl: 'https://i.imgur.com/yRFw8PJ.jpeg' },
  { id: 2, title: '🎮 HdM Games Days – Speaker Spotlight!', likes: 27, imageUrl: 'https://i.imgur.com/3eLeYcW.jpeg' },
  { id: 3, title: '✨Die legendäre Kükennacht ist zurück', likes: 88, imageUrl: 'https://i.imgur.com/82Z6flK.jpeg' }
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

import FollowersPopup from '../../components/FollowersPopup.vue'
const showFollowers = ref(false)
</script>

<template>
  <div class="app"> 
    <main class="main-content">
      <section class="profile">

        <div class="profile-info">
          <div class="profile-header">
            <img :src="avatarImageRef" alt="Profilbild" class="avatar" />

            <div class="text-info">
              <!-- Dynamischer Username -->
              <h2 class="username">{{ username }}</h2>
              <p class="fullname">{{ fullname }}</p>

              <div class="stats">
                <span><strong>{{ stats.posts }}</strong> Beiträge</span>
                <span class="clickable" @click="showFollowers = true">
                  <strong>{{ stats.followers }}</strong> Follower
                </span>
                <span><strong>{{ stats.following }}</strong> Gefolgt</span>
              </div>
            </div>

            <FollowersPopup v-if="showFollowers" @close="showFollowers = false" />
          </div>

          <div class="description">
            {{ description }}
          </div>

          <a :href="socialLink" target="_blank" class="social-link">
            www.hdm-stuttgart.de/quicklinks
          </a>

          <div class="action-buttons">
            <button v-if="!isFollowing" class="follow-btn" @click="toggleFollow()">
              Folgen
            </button>

            <button v-else class="unfollow-btn" @click="toggleFollow()">
              Gefolgt
            </button>

            <button v-show="isFollowing" class="message-btn">
              Nachricht senden
            </button>
          </div>
        </div>

        <!-- Posts -->
        <PostList :posts="posts" @select-post="openPost"/>

        <!-- Overlay -->
        <PostOverlay
          v-if="selectedPost"
          :post="selectedPost"
          :avatarImageRef="avatarImageRef"
          :username="username"
          @close="closePost"
        />
      </section>
    </main>
  </div>
</template>
