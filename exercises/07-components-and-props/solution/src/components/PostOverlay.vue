<script setup>
    const props = defineProps({
        post: { type: Object, required: true },
        avatarImageRef: { type: String, required: true },
        username: { type: String, required: true }
    })

    const emit = defineEmits(['close'])

    function closeOverlay() {
        emit('close')
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
                    <p class="overlay-likes">{{ post.likes }} ❤</p>
                </div>
            </div>
        </div>
    </div>
</template>