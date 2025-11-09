<script setup>
    import './postOverlay.css'
    import { ref } from 'vue'

    const props = defineProps({
        post: { type: Object, required: true },
        avatarImageRef: { type: String, required: true },
        username: { type: String, required: true }
    })

    const emit = defineEmits(['close'])

    function closeOverlay() {
        emit('close')
    }

    const comments = ref([
        { id: 1, text: 'Toller Beitrag!' },
        { id: 2, text: 'Freue mich schon auf mehr Posts 👏' }
    ])
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
                    <ul>
                        <li v-for="comment in comments" :key="comment.id">
                        <strong>{{ username }}</strong> {{ comment.text }}
                        </li>
                    </ul>
                    </div>
                </div>

                <!-- Comment-Form -->
            </div>
        </div>
    </div>
</template>