import * as Dialog from '@radix-ui/react-dialog'
import { X, ExternalLink, Github } from 'lucide-react'
import { Project } from '../types'

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <Dialog.Root open={!!project} onOpenChange={(open) => !open && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay
          className="fixed inset-0 z-50"
          style={{
            background: 'rgba(0,0,0,0.75)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            animation: 'fade-rise 0.2s ease-out both',
          }}
        />
        <Dialog.Content
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
          aria-describedby="project-description"
        >
          {project && (
            <div
              className="liquid-glass rounded-2xl w-full max-w-6xl max-h-[90vh] flex flex-col overflow-hidden"
              style={{ background: 'rgba(255,255,255,0.04)' }}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 shrink-0">
                <div className="flex items-center gap-4">
                  <Dialog.Title
                    className="text-xl text-foreground"
                    style={{ fontFamily: "'Instrument Serif', serif" }}
                  >
                    {project.title}
                  </Dialog.Title>
                  <span className="text-xs text-muted-foreground border border-white/10 rounded-full px-3 py-1">
                    {project.year}
                  </span>
                  {project.type === 'live' && (
                    <span className="text-xs text-emerald-400 border border-emerald-400/30 rounded-full px-3 py-1">
                      Live
                    </span>
                  )}
                </div>
                <Dialog.Close asChild>
                  <button
                    className="text-muted-foreground hover:text-foreground transition-colors p-1.5 rounded-lg hover:bg-white/5"
                    aria-label="Close"
                  >
                    <X size={18} />
                  </button>
                </Dialog.Close>
              </div>

              {/* Body */}
              <div className="flex flex-col lg:flex-row flex-1 overflow-hidden min-h-0">
                {/* Preview */}
                <div className="flex-1 relative bg-black/20 min-h-[300px] lg:min-h-0">
                  {project.url ? (
                    <iframe
                      src={project.url}
                      title={project.title}
                      className="w-full h-full border-0"
                      style={{ minHeight: '400px' }}
                      sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                    />
                  ) : project.videoUrl ? (
                    <video
                      src={project.videoUrl}
                      controls
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full text-muted-foreground text-sm">
                      No preview available
                    </div>
                  )}
                </div>

                {/* Sidebar */}
                <div className="lg:w-72 shrink-0 flex flex-col gap-6 p-6 border-t lg:border-t-0 lg:border-l border-white/10 overflow-y-auto">
                  <div>
                    <p
                      className="text-xs text-muted-foreground uppercase tracking-widest mb-2"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      About
                    </p>
                    <Dialog.Description
                      id="project-description"
                      className="text-sm text-foreground/80 leading-relaxed"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {project.description}
                    </Dialog.Description>
                  </div>

                  <div>
                    <p
                      className="text-xs text-muted-foreground uppercase tracking-widest mb-3"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      Stack
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs text-muted-foreground border border-white/10 rounded-full px-3 py-1"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 mt-auto">
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="liquid-glass flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm text-foreground transition-transform duration-200 hover:scale-[1.03]"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        <ExternalLink size={14} />
                        Visit Site
                      </a>
                    )}
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="liquid-glass flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm text-muted-foreground transition-transform duration-200 hover:scale-[1.03] hover:text-foreground"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        <Github size={14} />
                        View Repo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
