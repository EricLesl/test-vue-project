<script setup lang="ts">
import { useCounter } from '../composables/useCounter'

const { increment, decrement } = useCounter()
</script>

<template>
  <div>
    <button @click="increment">Counter ++</button>
    <button @click="decrement">Counter --</button>
  </div>
</template>

<style scoped lang="scss"></style>
