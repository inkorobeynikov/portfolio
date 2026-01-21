import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import MarkdownRenderer from '@/components/MarkdownRenderer';
import { getCaseStudy, getAllCaseStudySlugs } from '@/lib/content';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllCaseStudySlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = await getCaseStudy(slug);

  if (!caseStudy) {
    return {
      title: 'Case Study Not Found',
    };
  }

  const description = caseStudy.frontmatter.description as string | undefined;

  return {
    title: caseStudy.title,
    description: description || `Case study: ${caseStudy.title}`,
    openGraph: {
      title: caseStudy.title,
      description: description || `Case study: ${caseStudy.title}`,
      type: 'article',
    },
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const caseStudy = await getCaseStudy(slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <article className="section">
      <div className="container-narrow">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)] no-underline transition-colors mb-8"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to home
        </Link>

        {/* Header */}
        <header className="mb-12 pb-8 border-b border-[var(--color-border)]">
          <div className="flex items-center gap-2 mb-4">
            <span className="px-3 py-1 text-xs font-medium bg-[var(--color-accent)]/10 text-[var(--color-accent)] rounded-full">
              {caseStudy.type || 'Case Study'}
            </span>
            {caseStudy.status && (
              <span className="px-3 py-1 text-xs font-medium bg-[var(--color-success)]/10 text-[var(--color-success)] rounded-full">
                {caseStudy.status}
              </span>
            )}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)]">
            {caseStudy.title}
          </h1>
          {typeof caseStudy.frontmatter.description === 'string' && (
            <p className="text-lg text-[var(--color-text-secondary)] mt-4 leading-relaxed">
              {caseStudy.frontmatter.description}
            </p>
          )}
        </header>

        {/* Content */}
        <MarkdownRenderer html={caseStudy.html} />

        {/* Footer CTA */}
        <div className="mt-16 pt-8 border-t border-[var(--color-border)]">
          <div className="bg-[var(--color-bg-card)] rounded-2xl p-8 text-center">
            <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-2">
              Interested in working together?
            </h3>
            <p className="text-[var(--color-text-muted)] mb-6">
              I&apos;m available for consulting and development projects.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:in.korobeynikov@gmail.com"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient text-white rounded-xl font-medium no-underline hover:opacity-90 transition-opacity"
              >
                Get in touch
              </a>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--color-bg-elevated)] border border-[var(--color-border)] text-[var(--color-text-primary)] rounded-xl font-medium no-underline hover:border-[var(--color-text-muted)] transition-colors"
              >
                View more projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
