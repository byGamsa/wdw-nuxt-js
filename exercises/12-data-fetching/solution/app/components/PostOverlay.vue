<script setup>
import '../assets/postOverlay.css'
import { ref } from 'vue'
import { $fetch } from 'ofetch'

const props = defineProps({
  post: { type: Object, required: true },
  avatarImageRef: { type: String, required: true },
  username: { type: String, required: true }
})

const emit = defineEmits(['close'])

function closeOverlay() {
  emit('close')
}

const comments = ref([])
const newComment = ref('')
const isLoading = ref(true)
const hasError = ref(false)
 
try {
  const data = await $fetch(`https://dummyjson.com/comments/post/${props.post.id}`)
  comments.value = data.comments
} catch (err) {
  console.error('Fehler beim Laden der Kommentare:', err)
  hasError.value = true
} finally {
  isLoading.value = false
}
 
function addComment() {
  const text = newComment.value.trim()
  if (text !== '') {
    comments.value.push({
      id: Date.now(),
      body: text,
      user: { username: props.username }
    })
    newComment.value = ''
  }
}
</script>

<template>
  <div v-if="post" class="overlay" @click.self="closeOverlay">
    <div class="overlay-box">
      <div class="overlay-image">
        <img :src="post.imageUrl" :alt="post.title" />
      </div>

      <div class="overlay-side">
        <header class="overlay-header">
          <img :src="avatarImageRef" alt="Profilbild" class="overlay-avatar" />
          <h3 class="overlay-username">{{ username }}</h3>
          <button class="close-btn" @click="closeOverlay">×</button>
        </header>

        <div class="overlay-content">
          <p class="overlay-title">{{ post.title }}</p>
          <p class="overlay-likes">{{ post.likes }} Likes</p>

          <div class="comments">
            <p v-if="isLoading">Kommentare werden geladen...</p>
            <p v-else-if="hasError">Fehler beim Laden der Kommentare!</p>

            <ul v-else>
              <li v-for="comment in comments" :key="comment.id">
                <strong>{{ comment.user.username }}</strong> {{ comment.body }}
              </li>
            </ul>
          </div>
        </div>

        <div class="comment-form">
          <input
            type="text"
            placeholder="Kommentieren ..."
            v-model="newComment"
            @keyup.enter="addComment"
          />
          <button @click="addComment">Posten</button>
        </div>
      </div>
    </div>
  </div>
</template>
