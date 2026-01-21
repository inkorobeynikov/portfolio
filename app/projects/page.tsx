import type { Metadata } from 'next';
import Link from 'next/link';
import ProjectCard from '@/components/ProjectCard';
import { getProjects } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Selected projects and work experience from Ivan Karabeinikau, Lead Frontend Developer.',
};

export default function ProjectsPage() {
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
        <h1 className="title">Projects</h1>
        <p className="text-[var(--color-text-secondary)] mt-4 max-w-2xl mx-auto">
          Selected projects from my work as a frontend developer and architect.
          Each project represents different challenges and solutions in building modern web applications.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            role={project.role}
            demoUrl={project.demoUrl}
            tags={project.tags}
          />
        ))}
      </div>

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
