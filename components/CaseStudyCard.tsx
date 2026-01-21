import Link from 'next/link';

interface CaseStudyCardProps {
  title: string;
  type: string;
  description: string;
  slug: string;
  featured?: boolean;
}

export default function CaseStudyCard({
  title,
  type,
  description,
  slug,
  featured = false,
}: CaseStudyCardProps) {
  return (
    <article
      className={`relative rounded-2xl p-6 md:p-8 border transition-all group overflow-hidden ${
        featured
          ? 'bg-[var(--color-bg-card)] border-[var(--color-accent)]/30 hover:border-[var(--color-accent)]/50'
          : 'bg-[var(--color-bg-card)] border-[var(--color-border)] hover:border-[var(--color-accent)]/30'
      }`}
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="relative">
        {featured && (
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--color-accent)] uppercase tracking-wider mb-4">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            Featured Case Study
          </span>
        )}

        <h3 className="text-xl md:text-2xl font-semibold text-[var(--color-text-primary)] group-hover:text-gradient transition-all">
          {title}
        </h3>

        <p className="text-sm text-[var(--color-accent)]/70 mt-2">{type}</p>

        <p className="text-[var(--color-text-secondary)] mt-4 leading-relaxed">
          {description}
        </p>

        <Link
          href={`/case-studies/${slug}`}
          className="inline-flex items-center gap-2 mt-6 text-[var(--color-accent)] font-medium no-underline group-hover:gap-3 transition-all"
        >
          Read full case study
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </article>
  );
}
