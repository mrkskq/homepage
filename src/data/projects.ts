import type { Project } from '@/types/project'

export const projects: Project[] = [
  {
    id: 'wherenite',
    title: 'Wherenite',
    description:
      'Event discovery and ticketing web app built with ASP.NET MVC, allowing users to explore, filter events, view detailed event information, and purchase or reserve tickets easily.',
    tags: [
      'ASP.NET MVC',
      'C#',
      'Entity Framework',
      'HTML',
      'CSS',
      'Bootstrap',
      'jQuery',
      'Bootbox.js',
      'SQL Server',
      'Stripe API',
    ],
    repoUrl: 'https://github.com/mrkskq/Wherenite',
  },

  {
    id: 'busly',
    title: 'Busly',
    description:
      'An Omio-inspired intercity bus search app built with Vue 3 and TypeScript, featuring live scraped schedules from Skopje to destinations across Macedonia and beyond. Includes a rule-based chat assistant to help you find the best route to any city.',
    tags: [
      'Vue 3',
      'TypeScript',
      'Pinia',
      'Vue Router',
      'Tailwind CSS',
      'Leaflet + OSRM',
      'Cheerio + Axios',
      'Docker',
      'Docker Compose',
    ],
    repoUrl: 'https://github.com/mrkskq/OMIO-Clone-Intercity-Transport-App',
  },

  {
    id: 'huddle',
    title: 'Huddle',
    description:
      'Real-time video chat app built with Spring Boot and React, enabling users to create rooms, generate shareable invite links, and join calls instantly. Features live video and audio communication powered by LiveKit + WebRTC, along with in-room note-taking and meeting scheduling.',
    tags: [
      'SpringBoot',
      'Java',
      'PostgreSQL',
      'LiveKit Cloud (WebRTC)',
      'Spring Security + JWT + Refresh Tokens',
      'React 19 + Vite',
      'Nginx (Docker)',
      'Flyway (local)',
      'PostgreSQL init scripts (Docker)',
    ],
    repoUrl: 'https://github.com/mrkskq/Real-Time-Video-Chat-App',
  },

  {
    id: 'busly-cicd',
    title: 'Busly - CI/CD',
    description:
      'Busly is a web application for searching intercity bus routes from Skopje to cities across Macedonia and the region. The app is fully containerized, orchestrated with Docker Compose and Kubernetes, and has a CI pipeline via GitHub Actions.',
    tags: [
      'Vue 3',
      'TypeScript',
      'Pinia',
      'Vue Router',
      'Node.js',
      'Express',
      'Mongoose',
      'MongoDB',
      'Leaflet + OSRM',
      'Docker + Docker Compose',
      'GitHub Actions → DockerHub',
      'Kubernetes (k3d)',
      'Ingress (Traefik)',
    ],
    repoUrl: 'https://github.com/mrkskq/KIII-project',
  },
  {
    id: 'homepage',
    title: 'Homepage',
    description: 'My personal F1 themed website, the one you are currently viewing.',
    tags: [
      'Vue 3',
      'TypeScript',
      'Vue Router',
      'Tailwind CSS',
      'Vite',
      'Fontsource',
      'unplugin-icons',
      'ESLint + Prettier',
      'GitHub Actions',
      'GitHub Pages',
    ],
    repoUrl: 'https://github.com/mrkskq/homepage',
  },
]
