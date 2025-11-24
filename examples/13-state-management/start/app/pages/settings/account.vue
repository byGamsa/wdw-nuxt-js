<script setup>
</script>

<template>
  <div class="settings-page">
    <h1>Kontoeinstellungen</h1>

    <div class="settings-form">
      <label class="switch-label">
        <input type="checkbox"  />
        <span>Posts im Profil anzeigen</span>
      </label> 
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

.switch-label {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 1rem;
  color: #ccc;
}

input[type="checkbox"] {
  width: 18px;
  height: 18px;
  accent-color: #1da1f2;
  cursor: pointer;
}

.info {
  margin-top: 1rem;
  font-size: 0.95rem;
  color: #aaa;
}
</style>
