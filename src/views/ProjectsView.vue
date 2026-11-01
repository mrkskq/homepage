<script setup lang="ts">
import { computed, ref } from 'vue'
import { projects } from '@/data/projects'
import IconArrow from '~icons/mdi/arrow-top-right'
import IconChevron from '~icons/mdi/chevron-down'

const openId = ref<string | null>(null)
const total = projects.length

const current = computed(() => {
  const i = projects.findIndex((p) => p.id === openId.value)
  return i === -1 ? null : i + 1
})

function toggle(id: string) {
  openId.value = openId.value === id ? null : id
}

const imgUrl = (name: string) => `${import.meta.env.BASE_URL}projects/${name}`
</script>

<template>
  <main class="py-8">
    <div
      class="mb-3 flex items-center justify-between border-b-2 border-[#e10600] bg-black/70 px-4 py-3 backdrop-blur-sm"
    >
      <h1 class="font-display text-sm tracking-[0.25em] text-white md:text-base">PROJECTS</h1>
      <div class="font-display text-sm tracking-widest text-white md:text-base">
        <span class="text-zinc-400">PROJECT</span>
        <span class="ml-2 text-[#ff4d4d]">{{ current ?? '–' }}</span>
        <span class="text-zinc-400">/{{ total }}</span>
      </div>
    </div>

    <ul class="space-y-2">
      <li
        v-for="(project, i) in projects"
        :key="project.id"
        class="overflow-hidden rounded-md border border-white/15 bg-black/60 backdrop-blur-sm transition-colors duration-200"
        :class="openId === project.id ? 'border-red-400/70' : 'hover:border-red-300'"
      >
        <button
          type="button"
          class="flex w-full items-stretch text-left"
          :aria-expanded="openId === project.id"
          @click="toggle(project.id)"
        >
          <span
            class="font-display flex w-14 shrink-0 items-center justify-center py-3 text-lg font-bold text-white transition-colors duration-200"
            :class="openId === project.id ? 'bg-[#e10600]' : 'bg-zinc-800'"
          >
            {{ i + 1 }}
          </span>

          <span class="flex-1 px-4 py-3 text-lg font-semibold tracking-wide">
            {{ project.title }}
          </span>

          <span class="flex items-center pr-4 text-2xl text-zinc-400">
            <IconChevron
              class="transition-transform duration-300"
              :class="{ 'rotate-180 text-red-300': openId === project.id }"
              aria-hidden="true"
            />
          </span>
        </button>

        <div
          class="grid transition-[grid-template-rows] duration-300 ease-out"
          :class="openId === project.id ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'"
        >
          <div class="overflow-hidden">
            <div class="flex flex-col gap-5 border-t border-white/10 p-5 sm:flex-row">
              <img
                v-if="project.image"
                :src="imgUrl(project.image)"
                :alt="project.title"
                class="aspect-video w-full rounded-md object-cover sm:w-56"
              />

              <div class="flex-1">
                <p class="text-zinc-200">{{ project.description }}</p>

                <ul class="mt-3 flex flex-wrap gap-2">
                  <li
                    v-for="tag in project.tags"
                    :key="tag"
                    class="rounded-full bg-red-500/20 px-3 py-1 text-xs text-red-200"
                  >
                    {{ tag }}
                  </li>
                </ul>

                <div class="mt-4 flex justify-end gap-4 text-sm">
                  <a
                    v-if="project.repoUrl"
                    :href="project.repoUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="group inline-flex items-center gap-1 text-red-300 underline hover:text-white"
                  >
                    GitHub
                    <IconArrow
                      class="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </a>
                  <a
                    v-if="project.liveUrl"
                    :href="project.liveUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="group inline-flex items-center gap-1 text-red-300 underline hover:text-white"
                  >
                    Live demo
                    <IconArrow
                      class="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </main>
</template>
