<script setup lang="ts">
import { usePosts } from '@/composables/usePosts'

const { isLoading, currentPosts, hasDeleted, deletePost, resetDeleted } = usePosts()
</script>

<template>
  <div>
    <h1>Posts displayed when Posts Loaded</h1>
    <br />
    <p v-if="isLoading" style="text-align: center">Loading...</p>
    <template v-else>
      <div style="height: 2rem">
        <button v-if="hasDeleted" @click="resetDeleted">Reset Deleted</button>
      </div>
      <ul>
        <li v-for="post in currentPosts" :key="post.id">
          <h2>{{ post.title }}</h2>
          <p>{{ post.body }}</p>
          <button @click="deletePost(post.id)">Delete</button>
        </li>
      </ul>
    </template>
  </div>
</template>
