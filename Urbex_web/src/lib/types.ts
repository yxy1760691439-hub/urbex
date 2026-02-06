export interface Location {
  id: string
  name: string
  city: string
  province: string
  images: string[]
  difficulty: 1 | 2 | 3 | 4 | 5
  tags: string[]
  description: string
  coordinates?: [number, number]
  dangerLevel: 'low' | 'medium' | 'high'
}

export interface City {
  id: string
  name: string
  province: string
  description: string
  coverImage: string
  locationCount: number
}

export interface Province {
  id: string
  name: string
  cities: City[]
}

export interface Gear {
  id: string
  name: string
  slug: string
  category: 'lighting' | 'protection' | 'photography' | 'other'
  image: string
  description: string
  scenarios: string[]
  risks: string[]
}

export interface Story {
  id: string
  title: string
  slug: string
  coverImage: string
  excerpt: string
  content: string
  images: string[]
  tags: string[]
  relatedLocations: string[]
  publishedAt: string
}

export interface GalleryImage {
  id: string
  src: string
  title: string
  location?: string
  city?: string
  province?: string
  description?: string
  tags?: string[]
  type?: 'industrial' | 'school' | 'residential' | 'hospital' | 'commercial' | 'other'
  year?: number
  status?: 'abandoned' | 'demolished' | 'renovated' | 'preserved'
}

export interface ExplorationRecord {
  id: string
  name: string
  city: string
  type: 'industrial' | 'school' | 'residential' | 'hospital' | 'commercial' | 'other'
  year: number
  status: 'abandoned' | 'demolished' | 'renovated' | 'preserved'
  coverImage: string
  images: string[]
  description: string
  date: string
  tags: string[]
}







