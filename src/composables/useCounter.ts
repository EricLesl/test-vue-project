// useCounter.ts
import { ref } from 'vue'

const counter = ref(0)

export function useCounter() {
  function increment(): void {
    counter.value++
  }

  function decrement(): void {
    counter.value--
  }

  return {
    counter,
    increment,
    decrement
  }
}
