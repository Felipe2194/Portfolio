export type ProjectType = 'live' | 'repo'

export interface Project {
  id: string
  title: string
  description: string
  url?: string
  repoUrl?: string
  videoUrl?: string
  type: ProjectType
  tags: string[]
  year: string
}
