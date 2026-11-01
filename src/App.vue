<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import AppBackground from '@/components/AppBackground.vue'
import StartLights from '@/components/StartLights.vue'
</script>

<template>
  <StartLights />
  <AppBackground />

  <div class="relative flex min-h-screen flex-col text-purple-50">
    <div class="mx-auto flex w-full flex-1 flex-col px-4 md:w-1/2 md:min-w-[640px]">
      <header class="flex flex-col items-center gap-4 py-8">
        <RouterLink to="/" class="font-bold tracking-wider text-2xl">mrkskq</RouterLink>

        <nav class="flex gap-3 text-lg">
          <RouterLink
            to="/"
            class="rounded-lg border border-transparent px-4 py-1.5 transition-colors duration-200 hover:border-red-300 hover:bg-red-600/20 hover:text-red-200"
          >
            Home
          </RouterLink>
          <!-- <RouterLink
            to="/about"
            class="rounded-lg border border-transparent px-4 py-1.5 transition-colors duration-200 hover:border-red-300 hover:bg-red-600/20 hover:text-red-200"
          >
            About
          </RouterLink> -->
          <RouterLink
            to="/projects"
            class="rounded-lg border border-transparent px-4 py-1.5 transition-colors duration-200 hover:border-red-300 hover:bg-red-600/20 hover:text-red-200"
          >
            Projects
          </RouterLink>
        </nav>
      </header>

      <div class="flex flex-1 flex-col justify-center pb-16">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style scoped>
nav a.router-link-exact-active {
  color: #ff6b6b;
  border-color: rgba(255, 107, 107, 0.5);
  background-color: rgba(225, 6, 0, 0.15);
}
</style>
