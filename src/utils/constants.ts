import type { Project, Skill } from '../types';

// Project Data
export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Amazon Clone',
    description: 'A fully functional e-commerce platform with product browsing, cart management, and checkout system. Features include product categories, search functionality, and responsive design.',
    tags: ['React', 'Next.js', 'Tailwind CSS', 'Firebase', 'Stripe'],
    image: '/amazon-clone.jpg',
    github: 'https://github.com/Lengereh777/Amazon-Project',
    demo: 'https://github.com/Lengereh777/Amazon-Project'
  },
  {
    id: 2,
    title: 'Netflix Clone',
    description: 'A streaming platform interface with movie browsing, category filtering, and watchlist functionality. Features include horizontal scrolling categories and video playback integration.',
    tags: ['React', 'Redux', 'Tailwind CSS', 'TMDB API', 'Firebase'],
    image: 'https://images.unsplash.com/photo-1635805737707-575885ab0820?w=400&h=250&fit=crop',
    github: 'https://github.com/Lengereh777/Netflix-Clone-2025',
    demo: 'https://github.com/Lengereh777/Netflix-Clone-2025'
  },
  {
    id: 3,
    title: 'Evangadi Forum',
    description: 'A community discussion forum with user authentication, post creation, and comment system. Features include user profiles, reputation system, and real-time notifications.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io'],
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=250&fit=crop',
    github: 'https://github.com/Lengereh777/Evangadi-Forum-2',
    demo: 'https://github.com/Lengereh777/Evangadi-Forum-2'
  }
];

// Skills Data
export const SKILLS: Skill[] = [
  {
    id: 1,
    name: 'React',
    icon: 'react'
  },
  {
    id: 2,
    name: 'JavaScript',
    icon: 'javascript'
  },
  {
    id: 3,
    name: 'TypeScript',
    icon: 'typescript'
  },
  {
    id: 4,
    name: 'Node.js',
    icon: 'nodejs'
  },
  {
    id: 5,
    name: 'Python',
    icon: 'python'
  },
  {
    id: 6,
    name: 'Tailwind CSS',
    icon: 'tailwind'
  },
  {
    id: 7,
    name: 'Firebase',
    icon: 'firebase'
  },
  {
    id: 8,
    name: 'Git',
    icon: 'git'
  },
  {
    id: 9,
    name: 'Next.js',
    icon: 'nextjs'
  },
  {
    id: 10,
    name: 'MongoDB',
    icon: 'mongodb'
  },
  {
    id: 11,
    name: 'PostgreSQL',
    icon: 'postgresql'
  },
  {
    id: 12,
    name: 'Docker',
    icon: 'docker'
  }
];

// Contact Information
export const CONTACT_INFO = {
  email: 'amanuelkebede555@gmail.com',
  phone: '+49 176 95645996',
  location: 'Berlin, Germany',
  social: {
    github: 'https://github.com/Lengereh777'
  }
};