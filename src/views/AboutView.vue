<script setup lang="ts">
import { usePosts } from '../api/queries/usePosts'

const { posts } = usePosts()
</script>

<template>
  <div>
    <h1>Posts grab from cache!</h1>
    <br />
    <ul>
      <li v-for="post in posts" :key="post.id">
        <h2>{{ post.title }}</h2>
        <p>{{ post.body }}</p>
      </li>
    </ul>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
