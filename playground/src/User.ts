import { ref } from 'vue'

const user = ref<User | null>(null)
export interface User {
  id: number
  name: string
  is_editor: boolean
  is_admin: boolean
  permissions: Array<'admin' | 'owner' | 'moderator' | 'create-post' | 'edit-post' | 'delete-post'>
}
export {
  user,
}
