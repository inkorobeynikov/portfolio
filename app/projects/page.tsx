import type { Metadata } from 'next';
import Link from 'next/link';
import CaseStudyCard from '@/components/CaseStudyCard';
import ProjectCard from '@/components/ProjectCard';
import { getCaseStudySummaries, getProjects } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Projects & Case Studies',
  description: 'Selected case studies and interactive projects from Ivan Karabeinikau, Lead Frontend Developer.',
};

export default function ProjectsPage() {
  const caseStudies = getCaseStudySummaries();
  const projects = getProjects();

  return (
    <section className="mx-4 md:mx-16 lg:mx-40 py-16 min-h-screen">
      {/* Back link */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] no-underline transition-colors mb-8"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to home
      </Link>

      {/* Header */}
      <div className="text-center mb-12">
        <p className="section__text__p1">Browse My</p>
        <h1 className="title">Projects & Case Studies</h1>
        <p className="text-[var(--color-text-secondary)] mt-4 max-w-2xl mx-auto">
          Selected case studies and hands-on product work from my experience as a frontend lead, architect,
          and full-stack builder.
        </p>
      </div>

      {caseStudies.length > 0 && (
        <div className="max-w-5xl mx-auto mb-16">
          <div className="text-center mb-8">
            <p className="section__text__p1">Deep Dives</p>
            <h2 className="text-3xl font-semibold text-[var(--color-text-primary)]">Case Studies</h2>
          </div>
          <div className="grid gap-6">
            {caseStudies.map((caseStudy) => (
              <CaseStudyCard
                key={caseStudy.slug}
                title={caseStudy.title}
                type={caseStudy.type}
                description={caseStudy.description}
                slug={caseStudy.slug}
                status={caseStudy.status}
                featured={caseStudy.featured}
              />
            ))}
          </div>
        </div>
      )}

      {projects.length > 0 && (
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <p className="section__text__p1">Hands-On Builds</p>
            <h2 className="text-3xl font-semibold text-[var(--color-text-primary)]">Interactive Projects</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                role={project.role}
                href={project.href}
                linkLabel={project.linkLabel}
                badge={project.badge}
                tags={project.tags}
              />
            ))}
          </div>
        </div>
      )}

      {/* CTA */}
      <div className="text-center mt-16">
        <p className="text-[var(--color-text-muted)] mb-4">Interested in working together?</p>
        <Link href="/contact" className="btn btn-color-1">
          Get in Touch
        </Link>
      </div>
    </section>
  );
}
