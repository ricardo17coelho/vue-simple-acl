<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({

})
</script>

<template>
  <h1>ABOUT PAGE</h1>
  <router-link to="/">
    Home
  </router-link> |
  <router-link to="/about">
    About
  </router-link> |
  <router-link to="/post/1">
    Edit Post
  </router-link>
</template>
