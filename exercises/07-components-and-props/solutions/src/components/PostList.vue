<script setup>
    import { defineProps, defineEmits } from 'vue'

    const props = defineProps({
        posts: {
            type: Array,
            required: true
        }
    })

    const emit = defineEmits(['select-post'])

    function handleOpen(post) {
        emit('select-post', post)
    }

</script>

<template>
    <div class="posts">
        <p v-if="posts.length === 0">Noch keine Beiträge vorhanden</p>
        <div v-else class="post-list">
            <div v-for="post in posts" :key="post.id" class="post-card" @click="handleOpen(post)">
                <img :src="post.imageUrl" :alt="post.title"/>
                <div class="post-info">
                    <span class="title">{{ post.title }}</span>
                    <span class="likes">{{ post.likes }}</span>
                </div>
            </div>
        </div>
    </div>
</template>