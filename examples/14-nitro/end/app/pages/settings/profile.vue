<script setup> 
import { ref } from 'vue'

const username = ref('hdm.stuttgart')
const fullname = ref('Hochschule der Medien (HdM)')
const description = ref('Offizieller Instagram-Account der #hdmstuttgart 📱')
</script>

<template>
  <div class="settings-page">
    <h1>Profileinstellungen</h1>

    <div class="settings-form">
      <label>Username</label>
      <input v-model="username" type="text" />

      <label>Vollname</label>
      <input v-model="fullname" type="text" />

      <label>Beschreibung</label>
      <textarea v-model="description"></textarea>

      <button class="back-btn" @click="navigateTo(`/profile/${username}`)">
        Zurück zum Profil
      </button>
    </div>
  </div>
</template> 

<style scoped>
.settings-page {
  padding: 2rem;
  color: #fff;
  background: #000;
  min-height: 100vh;
}

h1 {
  font-size: 1.8rem;
  margin-bottom: 2rem;
}

.settings-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 400px;
}

label {
  font-weight: 500;
  font-size: 0.95rem;
  color: #aaa;
}

input,
textarea {
  background: #1a1a1a;
  border: 1px solid #333;
  border-radius: 8px;
  padding: 0.7rem;
  color: #fff;
  font-size: 1rem;
  width: 100%;
  resize: none;
}

textarea {
  min-height: 100px;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #555;
}

.back-btn {
  margin-top: 1.5rem;
  padding: 0.8rem 1.2rem;
  border: none;
  border-radius: 8px;
  background: #1da1f2;
  color: #fff;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  transition: background 0.2s ease-in-out;
}

.back-btn:hover {
  background: #1481c9;
}
</style>
