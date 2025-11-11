<template>
  <div class="app">
    <!-- Sidebar -->
    <Sidebar />

    <!-- Main Content -->
    <main class="main-content">
      <section class="profile">

        <div class="profile-info">
          <h2 class="username">hdm.stuttgart</h2>
          <p class="fullname">Hochschule der Medien (HdM)</p>

          <div class="stats">
            <span><strong>0</strong> Beiträge</span>
            <span><strong>15.300</strong> Follower</span>
            <span><strong>134</strong> Gefolgt</span>
          </div>

        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
  import Sidebar from './components/Sidebar.vue'
</script>

<style scoped>

</style>
