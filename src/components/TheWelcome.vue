<script setup lang="ts">
import { usePosts } from '../api/queries/usePosts'

const { posts, deletePost } = usePosts()
</script>

<template>
  <div>
    <h1>Posts loaded on Page Load</h1>
    <br />
    <ul>
      <li v-for="post in posts" :key="post.id">
        <h2>{{ post.title }}</h2>
        <p>{{ post.body }}</p>
        <button @click="deletePost(post.id)">Delete</button>
      </li>
    </ul>
  </div>
</template>
