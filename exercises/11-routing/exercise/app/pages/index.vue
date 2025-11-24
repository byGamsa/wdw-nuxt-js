<script setup> 
import { ref } from 'vue'
import './index.css'

const profiles = ref([
  { username: 'hdm.stuttgart', name: 'HdM Stuttgart', avatar: '/hdmLogo.jpg' },
  { username: 'vs.hdm', name: 'VS HdM', avatar: '/VsLogo.jpg' },
  { username: 'hdm.nerds', name: 'HdM Nerds', avatar: '/hdmNerds.jpg' }, 
])

const posts = ref([
  {
    id: 1,
    username: 'hdm.stuttgart',
    imageUrl: 'https://i.imgur.com/yRFw8PJ.jpeg',
    caption: 'Ab sofort könnt ihr vor dem Zitronenschnitz Sonne tanken! ☀️',
    likes: 42
  },
  {
    id: 2,
    username: 'vs.hdm',
    imageUrl: 'https://i.imgur.com/82Z6flK.jpeg',
    caption: '✨Die legendäre Kükennacht ist zurück',
    likes: 127
  },
  {
    id: 3,
    username: 'hdm.nerds',
    imageUrl: 'https://i.imgur.com/3eLeYcW.jpeg',
    caption: '🎮 HdM Games Days – Speaker Spotlight!',
    likes: 251
  }
])
</script>

<template>
  <div class="app">
    <main class="main-content feed">
      <!-- Story-Leiste -->
      <div class="stories">
        <div v-for="profile in profiles" :key="profile.username" class="story">
          <NuxtLink :to="`/profile/${profile.username}`">
            <img :src="profile.avatar" :alt="profile.username" class="story-avatar" />
          </NuxtLink>
          <span class="story-name">{{ profile.username }}</span>
        </div>
      </div>

      <!-- Feed-Posts -->
      <div class="feed-posts">
        <div v-for="post in posts" :key="post.id" class="feed-post">
          <div class="feed-header">
            <NuxtLink :to="`/profile/${post.username}`" class="feed-user">
              <img
                :src="profiles.find(p => p.username === post.username)?.avatar"
                :alt="post.username"
                class="feed-avatar"
              />
              <strong>{{ post.username }}</strong>
            </NuxtLink>
          </div>

          <img :src="post.imageUrl" :alt="post.caption" class="feed-image" />

          <div class="feed-caption">
            <NuxtLink :to="`/profile/${post.username}`" class="username-link">
              {{ post.username }}
            </NuxtLink>
            <span>{{ post.caption }}</span>
          </div>

          <div class="feed-likes">
            ❤️ {{ post.likes }} Likes
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
.feed {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
}

/* Stories oben */
.stories {
  display: flex;
  gap: 1rem;
  padding: 1rem 0;
  border-bottom: 1px solid #222;
  width: 100%;
  justify-content: center;
}

.story {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.8rem;
  color: #ccc;
}

.story-avatar {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border: 2px solid #e1306c;
  object-fit: cover;
  padding: 2px;
  transition: transform 0.2s ease;
}

.story-avatar:hover {
  transform: scale(1.05);
}

/* Feed-Posts */
.feed-posts {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  width: 100%;
  align-items: center;
}

.feed-post {
  border: 1px solid #222;
  border-radius: 8px;
  background: #000;
  overflow: hidden;
  max-width: 600px;
  width: 100%;
}

.feed-header {
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  gap: 0.5rem;
}

.feed-user {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #fff;
  text-decoration: none;
}

.feed-avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  object-fit: cover;
}

.feed-image {
  width: 100%;
  height: auto;
}

.feed-caption {
  padding: 0.75rem 1rem;
  color: #fff;
}

.username-link {
  font-weight: 600;
  margin-right: 0.5rem;
  color: #fff;
  text-decoration: none;
}

.feed-likes {
  padding: 0.5rem 1rem 1rem;
  color: #ccc;
  font-size: 0.9rem;
}
</style>
