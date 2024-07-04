<script setup lang="ts">
import { useCounter } from '../composables/useCounter'

const { counter, increment, decrement } = useCounter()
</script>

<template>
  <div>
    {{ counter }}
    <button @click="increment">Counter ++</button>
    <button @click="decrement">Counter --</button>
  </div>
</template>

<style scoped lang="scss"></style>
