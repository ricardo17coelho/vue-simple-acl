<script setup lang="ts">
import { nextTick, ref } from 'vue'
import { useAcl } from '../../src'
import { user } from './User.ts'

const post = ref({
  id: 100,
  user_id: 1,
  title: 'First Post',
})
const post2 = ref({
  id: 101,
  user_id: 2,
  title: 'Second Post',
})
const comment = ref({
  id: 101,
  post_id: 100,
  user_id: 1,
  title: 'Post comment',
})
const postTitle = ref(post.value.title)

const acl = useAcl()

if (acl.can.not('edit-post', post.value))
  console.log('User CAN edit post')
else
  console.log('User CAN NOT edit post')

console.log(acl.user)
setTimeout(() => {
  user.value = {
    id: 1,
    name: 'Victory Osayi',
    is_editor: true,
    is_admin: false,
    // you can have role based permission list or access control list possibly from database
    permissions: ['admin', 'owner', 'moderator', 'create-post', 'edit-post', 'delete-post'],
  }
  nextTick(() => {
    console.log(acl.user)
  })
}, 1000)
</script>

<template>
  <h1>Vue Simple ACL (DEMO)</h1>

  <div v-permission:create-post>
    #1. USER-1 can create POST
  </div>
  <br>
  <div v-can:edit-post="post">
    #2. USER-1 can edit POST-1
  </div>
  <br>
  <div v-can:edit-post="post2">
    #3. USER-1 can edit POST-2
  </div>
  <div v-can:edit-post.not="post2">
    #4. USER-1 cannot edit POST-2
  </div>
  <br>
  <div v-can.any="['create-post', ['edit-post', post]]">
    #5. USER-1 can create POST or edit POST-1
  </div>
  <br>
  <button v-can:hide-comment="[post, comment]">
    #6. Post Comment Owner or Post Owner or Admin can hide a comment!
  </button>
  <br>
  <input v-model="postTitle" v-can:edit-post.disabled="post2" type="text">
  <br>...

  <h2>User from useAcl</h2>
  {{ acl.user }}
  <h2>User from $acl</h2>
  {{ $acl.user }}
  <div v-if="$acl.role('edit-post', post)">
    #1. HELPER: USER-1 can create POST
  </div>

  <br>
  <br>
  ====== ROUTER VIEW ======
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
