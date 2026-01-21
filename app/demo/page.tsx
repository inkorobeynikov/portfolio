'use client';

import { useState } from 'react';
import Link from 'next/link';

// Demo app URL - in dev mode, Vite runs on port 5173
const DEMO_URL = 'http://localhost:5173';

export default function DemoPage() {
  const [viewMode, setViewMode] = useState<'mobile' | 'tablet' | 'full'>('mobile');

  const viewModes = {
    mobile: { width: 375, height: 700, label: 'Mobile' },
    tablet: { width: 768, height: 1024, label: 'Tablet' },
    full: { width: '100%', height: '80vh', label: 'Full Width' },
  };

  const currentView = viewModes[viewMode];

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
      <div className="text-center mb-8">
        <p className="section__text__p1">Interactive</p>
        <h1 className="title">Learn Words Demo</h1>
        <p className="text-[var(--color-text-secondary)] mt-4 max-w-2xl mx-auto">
          A vocabulary learning app built with React 19, Redux Toolkit, and TypeScript.
          This demo showcases Italian word learning with spaced repetition algorithm.
        </p>
      </div>

      {/* Tech Stack */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {['React 19', 'Redux Toolkit', 'TypeScript', 'Tailwind CSS', 'Vite', 'i18next'].map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 bg-[var(--color-background-secondary)] text-[var(--color-text-secondary)] rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* View Mode Toggle */}
      <div className="flex justify-center gap-2 mb-8">
        {(Object.keys(viewModes) as Array<keyof typeof viewModes>).map((mode) => (
          <button
            key={mode}
            onClick={() => setViewMode(mode)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              viewMode === mode
                ? 'bg-[var(--color-primary)] text-white'
                : 'bg-[var(--color-background-secondary)] text-[var(--color-text-secondary)] hover:bg-[var(--color-background-tertiary)]'
            }`}
          >
            {viewModes[mode].label}
          </button>
        ))}
      </div>

      {/* Demo Container */}
      <div className="flex justify-center">
        <div
          className="bg-[var(--color-background-secondary)] rounded-2xl shadow-xl overflow-hidden transition-all duration-300"
          style={{
            width: typeof currentView.width === 'number' ? `${currentView.width}px` : currentView.width,
            height: typeof currentView.height === 'number' ? `${currentView.height}px` : currentView.height,
            minHeight: viewMode === 'full' ? '600px' : undefined,
            maxWidth: '100%',
          }}
        >
          {/* Phone notch for mobile view */}
          {viewMode === 'mobile' && (
            <div className="bg-gray-900 h-6 flex items-center justify-center">
              <div className="w-20 h-1 bg-gray-700 rounded-full" />
            </div>
          )}

          {/* iframe */}
          <iframe
            src={DEMO_URL}
            title="Learn Words Demo"
            className="w-full border-0"
            style={{
              height: viewMode === 'mobile' ? 'calc(100% - 24px)' : '100%',
            }}
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals"
            allow="clipboard-write"
          />
        </div>
      </div>

      {/* Features List */}
      <div className="mt-12 max-w-2xl mx-auto">
        <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-4 text-center">
          Features Demonstrated
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { title: 'Spaced Repetition', desc: 'SM-2 algorithm for optimal learning' },
            { title: 'Italian Vocabulary', desc: '16 demo words with conjugations' },
            { title: 'Multiple Exercises', desc: 'Word puzzles, choice questions' },
            { title: 'Progress Tracking', desc: 'Session-based learning flow' },
            { title: 'Telegram Mini App', desc: 'Mocked for standalone demo' },
            { title: 'Responsive Design', desc: 'Mobile-first approach' },
          ].map((feature) => (
            <div
              key={feature.title}
              className="p-4 bg-[var(--color-background-secondary)] rounded-lg"
            >
              <h4 className="font-medium text-[var(--color-text-primary)]">{feature.title}</h4>
              <p className="text-sm text-[var(--color-text-muted)]">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Note */}
      <div className="mt-8 p-4 bg-amber-50 border border-amber-200 rounded-lg max-w-2xl mx-auto">
        <p className="text-amber-800 text-sm">
          <strong>Note:</strong> This demo runs on mock data. In production, the app integrates with
          a Telegram bot backend for real vocabulary learning with personalized word selection.
        </p>
      </div>

      {/* CTA */}
      <div className="text-center mt-12">
        <p className="text-[var(--color-text-muted)] mb-4">Want to see more projects?</p>
        <Link href="/projects" className="btn btn-color-1">
          View All Projects
        </Link>
      </div>
    </section>
  );
}
