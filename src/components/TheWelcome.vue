<script setup lang="ts">
import { usePosts } from '../api/queries/usePosts'

const { posts } = usePosts()
</script>

<template>
  <div>
    <h1>Posts loaded on Page Load</h1>
    <br />
    <ul>
      <li v-for="post in posts" :key="post.id">
        <h2>{{ post.title }}</h2>
        <p>{{ post.body }}</p>
      </li>
    </ul>
  </div>
</template>
