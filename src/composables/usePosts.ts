import { computed, ref } from 'vue'
import { usePostsQuery } from '@/api/queries/usePostsQuery'
import type { Posts } from '@/types/post'

const deletedPosts = ref<number[]>([])

export function usePosts() {
  const query = usePostsQuery()
  const { posts } = usePostsQuery()
  const top5Posts = computed<Posts>(() => posts.value?.slice(0, 5) ?? [])
  const currentPosts = computed(() =>
    top5Posts.value.filter((currentPost) => !deletedPosts.value.includes(currentPost.id))
  )
  const hasDeleted = computed(() => deletedPosts.value.length > 0)

  function deletePost(id: number) {
    deletedPosts.value.push(id)
  }

  function resetDeleted() {
    deletedPosts.value = []
  }

  return {
    ...query,
    posts,
    currentPosts,
    hasDeleted,
    deletePost,
    resetDeleted
  }
}
