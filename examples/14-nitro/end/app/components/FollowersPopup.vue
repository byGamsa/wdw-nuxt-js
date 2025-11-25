<script setup>
import { ref, computed } from 'vue'

const emit = defineEmits(['close'])
const searchQuery = ref('')
const followers = ref([])

// Follower laden mit useFetch
const { data, pending, error } = await useFetch('/api/follower')
followers.value = data.value?.results

// Follower laden mit $fetch
/* const pending = ref(true)
const error = ref(false)

try {
  const data = await $fetch('https://randomuser.me/api/?results=10')
  followers.value = data.results
} catch (err) {
  console.error('Fehler beim Laden:', err)
  error.value = true
} finally {
  pending.value = false
} 
 */
 
</script>

<template>
  <div class="overlay" @click.self="emit('close')">
    <div class="popup">
      <div class="popup-header">
        <h3>Follower</h3>
        <button class="close-btn" @click="emit('close')">×</button>
      </div>

      <div class="search-container">
        <div class="search-wrapper">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="search-icon">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input v-model="searchQuery" type="text" placeholder="Suchen" class="search-input" />
        </div>
      </div>

      <div v-if="pending" class="loading">Lade Follower...</div>
      <div v-else-if="error" class="loading">Fehler beim Laden der Follower</div>

      <div v-else class="follower-list">
        <div v-for="f in followers" :key="f.login.uuid" class="follower-item">
          <img :src="f.picture.thumbnail" :alt="f.name.first" class="avatar" />
          <div class="info">
            <strong>{{ f.login.username }}</strong>
            <span>{{ f.name.first }} {{ f.name.last }}</span>
          </div>
          <button class="follow-btn">Entfernen</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 200;
  backdrop-filter: blur(2px);
}

.popup {
  background: #262626;
  width: 400px;
  max-height: 600px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  color: #fff;
  overflow: hidden;
}

.popup-header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #363636;
  position: relative;
}

.popup-header h3 {
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
}

.close-btn {
  position: absolute;
  right: 1rem;
  background: none;
  border: none;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
  line-height: 1;
}

.search-container {
  padding: 1rem;
}

.search-wrapper {
  position: relative;
  background: #363636;
  border-radius: 8px;
  display: flex;
  align-items: center;
  padding: 0 10px;
}

.search-icon {
  color: #8e8e8e;
  margin-right: 8px;
}

.search-input {
  background: transparent;
  border: none;
  color: #fff;
  padding: 10px 0;
  width: 100%;
  outline: none;
  font-size: 0.9rem;
}

.search-input::placeholder {
  color: #8e8e8e;
}

.loading {
  text-align: center;
  color: #999;
  padding: 2rem;
}

.follower-list {
  flex: 1;
  padding: 0 1rem 1rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.follower-item {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.avatar {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  object-fit: cover;
}

.info {
  flex: 1;
  display: flex;
  flex-direction: column;
  font-size: 0.9rem;
  overflow: hidden;
}

.info strong {
  font-weight: 600;
}

.info span {
  color: #a8a8a8;
  font-size: 0.85rem;
}

.follow-btn {
  background: #363636;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s ease;
}

.follow-btn:hover {
  background: #444;
}
</style>
