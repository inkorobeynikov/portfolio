import Link from 'next/link';

interface CaseStudyCardProps {
  title: string;
  type: string;
  description: string;
  slug: string;
  status?: string;
  featured?: boolean;
}

export default function CaseStudyCard({
  title,
  type,
  description,
  slug,
  status,
  featured = false,
}: CaseStudyCardProps) {
  return (
    <Link href={`/case-studies/${slug}`} className="block no-underline h-full">
      <article className="details-container color-container p-6 hover:shadow-lg transition-shadow cursor-pointer hover:border-[var(--color-accent)] h-full">
        <div className="flex flex-col h-full">
          <div className="flex items-center gap-3 text-xs uppercase tracking-wider text-[var(--color-text-muted)]">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-100">
              <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9 12h6m-6 4h6M8 4h8a2 2 0 012 2v12a2 2 0 01-2 2H8a2 2 0 01-2-2V6a2 2 0 012-2z"
                />
              </svg>
            </span>
            <span>Case Study</span>
          </div>

          <h3 className="mt-4 text-xl font-semibold text-[var(--color-text-primary)] leading-snug">
            {title}
          </h3>

          <div className="mt-3 flex flex-wrap gap-2">
            {featured && (
              <span className="text-xs px-2 py-1 border border-[var(--color-border)] text-[var(--color-text-muted)] rounded-full">
                Featured
              </span>
            )}
            {status && (
              <span className="text-xs px-2 py-1 bg-[var(--color-success)]/10 text-[var(--color-success)] rounded-full">
                {status}
              </span>
            )}
          </div>

          <p className="text-sm text-[var(--color-text-muted)] mt-3">{type}</p>
          <p className="text-[var(--color-text-secondary)] mt-3 leading-relaxed text-sm">
            {description}
          </p>
          <div className="inline-flex items-center gap-2 mt-auto pt-4 text-sm font-medium text-[var(--color-accent)]">
            Read case study
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </article>
    </Link>
  );
}
