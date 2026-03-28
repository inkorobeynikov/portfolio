import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  description: string;
  role?: string;
  href?: string;
  linkLabel?: string;
  badge?: string;
  tags?: string[];
}

export default function ProjectCard({
  title,
  description,
  role,
  href,
  linkLabel,
  badge,
  tags,
}: ProjectCardProps) {
  const CardContent = (
    <>
      <div className="flex flex-col h-full">
        <div className="flex items-center gap-3 text-xs uppercase tracking-wider text-[var(--color-text-muted)]">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-100">
            <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </span>
          <span>Project</span>
        </div>

        <h3 className="mt-4 text-xl font-semibold text-[var(--color-text-primary)] leading-snug">
          {title}
        </h3>

        <div className="mt-3 flex flex-wrap gap-2">
          {badge && (
            <span className="shrink-0 text-xs px-2 py-1 bg-[var(--color-accent)] text-white rounded-full">
              {badge}
            </span>
          )}
        </div>

        {role && (
          <p className="text-sm text-[var(--color-text-muted)] mt-3">{role}</p>
        )}
        <p className="text-[var(--color-text-secondary)] mt-3 leading-relaxed text-sm">
          {description}
        </p>
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-4">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-0.5 bg-[var(--color-background-secondary)] text-[var(--color-text-muted)] rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        {href && (
          <div className="inline-flex items-center gap-2 mt-auto pt-4 text-sm font-medium text-[var(--color-accent)]">
            {linkLabel || 'Open Project'}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        )}
      </div>
    </>
  );

  if (href) {
    return (
      <Link href={href} className="block no-underline h-full">
        <article className="details-container color-container p-6 hover:shadow-lg transition-shadow cursor-pointer hover:border-[var(--color-accent)] h-full">
          {CardContent}
        </article>
      </Link>
    );
  }

  return (
    <article className="details-container color-container p-6 hover:shadow-lg transition-shadow h-full">
      {CardContent}
    </article>
  );
}
