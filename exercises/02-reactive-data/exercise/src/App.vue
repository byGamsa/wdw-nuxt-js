<script setup>
  import Sidebar from './components/Sidebar.vue'

  import { ref } from 'vue'

  const username = ref('hdm.stuttgart')
  const fullname = ref('Hochschule der Medien (HdM)')
  const stats = ref({
    posts: 0,
    followers: 15300,
    following: 134
  })
  // Start coding here!


</script>

<template>
  <div class="app">
    <!-- Sidebar -->
    <Sidebar />

    <!-- Main Content -->
    <main class="main-content">
      <section class="profile">

        <div class="profile-info">
          <h2 class="username">{{username}}</h2>
          <p class="fullname">{{fullname}}</p>

          <div class="stats">
            <span><strong>{{stats.posts}}</strong> Beiträge</span>
            <span><strong>{{stats.followers}}</strong> Follower</span>
            <span><strong>{{stats.following}}</strong> Gefolgt</span>
          </div>

        </div>
      </section>
    </main>
  </div>
</template>
