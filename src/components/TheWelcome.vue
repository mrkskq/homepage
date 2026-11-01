<script setup lang="ts">
import IconGithub from '~icons/mdi/github'
import IconEmail from '~icons/mdi/email-outline'
import IconLinkedin from '~icons/mdi/linkedin'
import IconLetterboxd from '~icons/simple-icons/letterboxd'
import IconDiscord from '~icons/simple-icons/discord'

const technologies: string[] = [
  'Java',
  'JavaScript',
  'TypeScript',
  'Python',
  'C++',
  'C#',
  'PostgreSQL',
  'MongoDB',
  'Git',
  'Docker',
  'Kubernetes',
  'GitHub Actions',
  'CI/CD',
  'Vue.js',
  'React',
  'Bootstrap',
  'Node.js',
  'Spring Boot',
  'ASP.NET',
  'Django',
]

const contacts = [
  { label: 'GitHub', href: 'https://github.com/mrkskq', icon: IconGithub },
  { label: 'Email', href: 'mailto:anamarkoska24@gmail.com', icon: IconEmail },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ana-markoska-15351a437/',
    icon: IconLinkedin,
  },
  { label: 'Letterboxd', href: 'https://letterboxd.com/Anzz_/', icon: IconLetterboxd },
  { label: 'Discord', href: 'https://discord.com/users/760912914957336598', icon: IconDiscord },
]
</script>

<template>
  <h1 class="text-center text-4xl font-bold tracking-wider">Ana Markoska</h1>
  <h3 class="text-center tracking-wider text-lg text-zinc-200 mt-3 mb-5">
    B.Sc. in Software Engineering and Information Technologies @ FCSE
  </h3>

  <ul class="mt-5 flex flex-wrap justify-center gap-4">
    <li v-for="c in contacts" :key="c.label">
      <a
        :href="c.href"
        :aria-label="c.label"
        :title="c.label"
        target="_blank"
        rel="noopener noreferrer"
        class="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/60 text-2xl transition-colors duration-200 hover:border-red-300 hover:bg-red-600/30 hover:text-red-200"
      >
        <component :is="c.icon" />
      </a>
    </li>
  </ul>

  <section class="mt-10 text-center">
    <h2 class="mb-4 text-lg font-semibold tracking-wider text-red-300">Technologies</h2>

    <ul class="flex flex-wrap justify-center gap-3">
      <li
        v-for="tech in technologies"
        :key="tech"
        class="rounded-lg border border-white/15 bg-black/60 px-4 py-2 text-sm backdrop-blur-sm transition-colors duration-200 hover:border-red-300 hover:bg-red-600/30"
      >
        {{ tech }}
      </li>
    </ul>
  </section>
</template>
