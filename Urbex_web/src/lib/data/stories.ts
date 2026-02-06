import { Story } from '../types'

export const stories: Story[] = [
  {
    id: '1',
    title: 'Essential Gear for Urban Exploration',
    slug: 'essential-gear',
    coverImage: '',
    excerpt: 'A comprehensive guide to the equipment needed for safe and effective urban exploration.',
    content: `# Essential Gear for Urban Exploration

Urban exploration requires careful preparation and the right equipment. Here are the essentials...

## Lighting

A reliable flashlight is crucial. I recommend...

## Safety Equipment

Never compromise on safety...`,
    images: [],
    tags: ['gear', 'equipment'],
    relatedLocations: [],
    publishedAt: '2024-01-20',
  },
  {
    id: '2',
    title: 'Thoughts on Abandoned Spaces',
    slug: 'thoughts-on-abandoned-spaces',
    coverImage: '',
    excerpt: 'Reflections on what draws us to these forgotten places and what they mean.',
    content: `# Thoughts on Abandoned Spaces

There's something profound about walking through spaces that were once full of life...`,
    images: [],
    tags: ['reflection', 'philosophy'],
    relatedLocations: [],
    publishedAt: '2024-01-12',
  },
  {
    id: '3',
    title: 'Behind the Scenes: Factory Zone A',
    slug: 'behind-scenes-factory',
    coverImage: '',
    excerpt: 'The story behind exploring Factory Zone A, including challenges and discoveries.',
    content: `# Behind the Scenes: Factory Zone A

This exploration was particularly challenging...`,
    images: [],
    tags: ['behind-scenes', 'exploration'],
    relatedLocations: ['1'],
    publishedAt: '2024-01-08',
  },
]
