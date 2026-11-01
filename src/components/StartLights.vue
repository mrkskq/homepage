<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

const KEY = 'startLightsSeen'

const visible = ref(false)
const lit = ref(0) // kolku svetla gorat (0 do 5)
const go = ref(false) // true koga svetlata se ugasnati

const timers: number[] = []
function later(fn: () => void, ms: number) {
  timers.push(window.setTimeout(fn, ms))
}

function finish() {
  visible.value = false
  try {
    sessionStorage.setItem(KEY, '1')
  } catch {}
}

onMounted(() => {
  try {
    if (sessionStorage.getItem(KEY)) return
  } catch {}
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  visible.value = true

  // svetlata se palat po edno na sekoi 0.7s
  for (let i = 1; i <= 5; i++) {
    later(() => (lit.value = i), 600 + i * 700)
  }

  // site gorat do ~4.1s, pa sluchajna pauza 0.6-1.6s, pa "lights out"
  const out = 4100 + 600 + Math.random() * 1000
  later(() => {
    lit.value = 0
    go.value = true
  }, out)

  later(finish, out + 1100)
})

onBeforeUnmount(() => timers.forEach(clearTimeout))
</script>

<template>
  <Transition name="lights-fade">
    <div
      v-if="visible"
      class="fixed inset-0 z-50 flex cursor-pointer flex-col items-center justify-center gap-10 bg-[#0e0e12]"
      @click="finish"
    >
      <div class="flex gap-3 sm:gap-5">
        <div
          v-for="n in 5"
          :key="n"
          class="flex flex-col gap-3 rounded-xl border border-white/10 bg-black px-2 py-3 sm:px-3 sm:py-4"
        >
          <span
            v-for="row in 2"
            :key="row"
            class="light block h-10 w-10 rounded-full sm:h-16 sm:w-16"
            :class="{ on: n <= lit }"
          />
        </div>
      </div>

      <p
        class="font-display text-sm tracking-[0.3em] text-white/70 transition-opacity duration-300"
        :class="go ? 'opacity-100' : 'opacity-0'"
      >
        LIGHTS OUT AND AWAY WE GO
      </p>

      <p class="absolute bottom-6 text-xs tracking-widest text-white/30">CLICK TO SKIP</p>
    </div>
  </Transition>
</template>

<style scoped>
.light {
  background: #2a0a0a;
  box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.8);
  transition:
    background-color 0.08s,
    box-shadow 0.08s;
}

.light.on {
  background: #ff1e1e;
  box-shadow:
    0 0 24px 6px rgba(225, 6, 0, 0.7),
    inset 0 0 10px rgba(255, 140, 140, 0.6);
}

.lights-fade-leave-active {
  transition: opacity 0.7s ease;
}
.lights-fade-leave-to {
  opacity: 0;
}
</style>
