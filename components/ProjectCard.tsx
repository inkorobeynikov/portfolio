interface ProjectCardProps {
  title: string;
  description: string;
  role?: string;
}

export default function ProjectCard({ title, description, role }: ProjectCardProps) {
  return (
    <article className="details-container color-container p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start gap-4">
        <div className="shrink-0 w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
          <svg className="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <div className="text-left">
          <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">
            {title}
          </h3>
          {role && (
            <p className="text-sm text-[var(--color-text-muted)] mt-1">{role}</p>
          )}
          <p className="text-[var(--color-text-secondary)] mt-3 leading-relaxed text-sm">
            {description}
          </p>
        </div>
      </div>
    </article>
  );
}
