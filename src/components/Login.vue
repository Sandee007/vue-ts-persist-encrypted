<script setup lang="ts">
import {useRootStore} from "../store/rootStore.ts";

const rootStore = useRootStore()
</script>

<template>
  <button @click="rootStore.setToken()">
    Login
  </button>
</template>

<style scoped>

</style>