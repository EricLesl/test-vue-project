// usePosts.ts
import { ref, watch } from 'vue'
import { usePostsQuery, type Post } from './usePostsQuery'

const posts = ref<Post[]>([])

export function usePosts() {
  const { data: queryData } = usePostsQuery()

  watch(
    queryData,
    (newPosts) => {
      if (newPosts) {
        posts.value = newPosts.slice(0, 5)
      }
    },
    { deep: true }
  )

  function deletePost(id: number) {
    posts.value = posts.value.filter((post) => post.id !== id)
  }

  return {
    posts,
    deletePost
  }
}
