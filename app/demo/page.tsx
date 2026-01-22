"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

// Demo app URL
const DEMO_URL = process.env.NODE_ENV === "development"
  ? "http://localhost:5173"
  : "https://demo.learningbot.online";

export default function DemoPage() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const threshold = window.innerHeight * 0.17;
      setIsScrolled(window.scrollY > threshold);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <section className="mx-4 md:mx-16 lg:mx-40 pt-0 pb-16 min-h-screen">
        <div className="mb-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] no-underline transition-colors"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to home
          </Link>
        </div>
        <div className="flex flex-col gap-12 md:grid md:grid-cols-[minmax(0,1fr)_420px] md:items-start md:gap-12">
          <div className="space-y-8">
            {/* Header */}
            <div className="text-center">
              <p className="section__text__p1">Interactive</p>
              <h1 className="title">Learn Words Demo</h1>
              <p className="text-[var(--color-text-secondary)] mt-4 max-w-2xl mx-auto">
                An end-to-end vocabulary learning product built as a Telegram
                bot + backend service + web app. This interactive demo runs on
                mock data, while the production version integrates with a real
                backend, OpenAI API, and personalized learning logic.
              </p>
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap justify-center gap-2">
              {[
                "React 19",
                "Redux Toolkit",
                "TypeScript",
                "Tailwind CSS",
                "Vite",
                "i18next",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-[var(--color-background-secondary)] text-[var(--color-text-secondary)] rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Demo Container */}
          <div className="md:col-start-2 md:row-start-1 md:row-span-2">
            <div className="flex justify-center md:justify-end">
              <div
                className={`bg-[var(--color-background-secondary)] rounded-2xl shadow-xl overflow-hidden transition-all duration-300 w-full max-w-[375px] md:fixed md:right-16 lg:right-40 md:w-[375px] ${
                  isScrolled ? "md:top-10" : "md:top-[calc(17vh+1rem)]"
                }`}
                style={{ height: "700px" }}
              >
                <div className="bg-gray-900 h-6 flex items-center justify-center">
                  <div className="w-20 h-1 bg-gray-700 rounded-full" />
                </div>

                <iframe
                  src={DEMO_URL}
                  title="Learn Words Demo"
                  className="w-full border-0"
                  style={{ height: "calc(100% - 24px)" }}
                  sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals"
                  allow="clipboard-write"
                />
              </div>
            </div>
          </div>

          <div>
            {/* Features List */}
            <div className="max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-4 text-center">
                Product features
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  {
                    title: "Spaced repetition learning logic",
                    desc: "SM-2 based algorithm",
                  },
                  {
                    title: "Multiple exercise types",
                    desc: "Word puzzles, choice questions",
                  },
                  {
                    title: "Session-based learning flow",
                    desc: "Structured learning sessions",
                  },
                  {
                    title: "Personalized vocabulary selection",
                    desc: "Production version",
                  },
                  {
                    title: "Progress tracking",
                    desc: "Learning history and stats",
                  },
                  {
                    title: "Telegram Mini App + web version",
                    desc: "Multiple platforms",
                  },
                  {
                    title: "Mobile-first responsive design",
                    desc: "Optimized for all devices",
                  },
                ].map((feature) => (
                  <div
                    key={feature.title}
                    className="p-4 bg-[var(--color-background-secondary)] rounded-lg"
                  >
                    <h4 className="font-medium text-[var(--color-text-primary)]">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-[var(--color-text-muted)]">
                      {feature.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* System Architecture */}
            <div className="mt-12 max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-4 text-center">
                System architecture
              </h3>
              <div className="p-6 bg-[var(--color-background-secondary)] rounded-lg">
                <p className="text-[var(--color-text-secondary)] mb-4">
                  The product is built as a three-part system designed for real
                  production use:
                </p>
                <ul className="space-y-2 text-[var(--color-text-secondary)] list-disc list-inside">
                  <li>
                    <strong>Telegram bot</strong> - user interaction, daily
                    learning flows, and notifications
                  </li>
                  <li>
                    <strong>Backend service (Node.js)</strong> - learning logic,
                    spaced repetition scheduling, user progress, and
                    integrations
                  </li>
                  <li>
                    <strong>Web app</strong> - interactive learning interface
                    (Telegram Mini App + standalone web version)
                  </li>
                </ul>
                <p className="text-[var(--color-text-secondary)] mt-4">
                  All parts communicate via APIs and are designed to be deployed
                  and scaled independently.
                </p>
              </div>
            </div>

            {/* Demo vs Production */}
            <div className="mt-12 max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-4 text-center">
                Demo vs production
              </h3>
              <div className="p-6 bg-[var(--color-background-secondary)] rounded-lg">
                <p className="text-[var(--color-text-secondary)] mb-4">
                  This demo version runs entirely on mock data to showcase the
                  UI and learning flow. In production, the system connects to a
                  real backend, OpenAI API, and a persistent database.
                </p>
                <ul className="space-y-2 text-[var(--color-text-secondary)] list-disc list-inside">
                  <li>
                    <strong>Demo:</strong> mock vocabulary and session state
                  </li>
                  <li>
                    <strong>Production:</strong> real user accounts,
                    personalized word selection, learning history
                  </li>
                  <li>
                    <strong>Same frontend codebase</strong> used for both demo
                    and production
                  </li>
                </ul>
              </div>
            </div>

            {/* AI & Automation */}
            <div className="mt-12 max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-4 text-center">
                AI & automation
              </h3>
              <div className="p-6 bg-[var(--color-background-secondary)] rounded-lg">
                <p className="text-[var(--color-text-secondary)] mb-4">
                  The production version integrates with the OpenAI API to
                  generate and enrich vocabulary content, automate learning
                  flows, and support future AI-driven features.
                </p>
                <ul className="space-y-2 text-[var(--color-text-secondary)] list-disc list-inside">
                  <li>OpenAI API for content generation and enrichment</li>
                  <li>Automation-friendly architecture</li>
                  <li>Extensible for future AI-assisted learning features</li>
                </ul>
              </div>
            </div>

            {/* DevOps & Delivery */}
            <div className="mt-12 max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-4 text-center">
                DevOps & delivery
              </h3>
              <div className="p-6 bg-[var(--color-background-secondary)] rounded-lg">
                <p className="text-[var(--color-text-secondary)] mb-4">
                  The entire system is designed with production readiness in
                  mind - not just as a UI demo.
                </p>
                <ul className="space-y-2 text-[var(--color-text-secondary)] list-disc list-inside">
                  <li>Docker-based deployment for bot, backend, and web app</li>
                  <li>GitHub Actions for CI and automated testing</li>
                  <li>Test coverage tracking across all components</li>
                  <li>One-command production deployment via Docker</li>
                </ul>
              </div>
            </div>

            {/* Multi-language Support */}
            <div className="mt-12 max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-4 text-center">
                Multi-language support
              </h3>
              <div className="p-6 bg-[var(--color-background-secondary)] rounded-lg">
                <p className="text-[var(--color-text-secondary)] mb-4">
                  The system is designed to scale to new languages with minimal
                  effort.
                </p>
                <ul className="space-y-2 text-[var(--color-text-secondary)] list-disc list-inside">
                  <li>
                    Adding a new language requires only an environment file
                  </li>
                  <li>No code changes needed for basic language setup</li>
                  <li>Restart Docker containers to activate a new language</li>
                  <li>Same infrastructure reused for all language versions</li>
                </ul>
              </div>
            </div>

            {/* Project Scope & Timeline */}
            <div className="mt-12 max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-4 text-center">
                Project scope & timeline
              </h3>
              <div className="p-6 bg-[var(--color-background-secondary)] rounded-lg">
                <p className="text-[var(--color-text-secondary)] mb-4">
                  This project was designed, built, and delivered solo in one
                  month.
                </p>
                <ul className="space-y-2 text-[var(--color-text-secondary)] list-disc list-inside">
                  <li>Product design</li>
                  <li>System architecture</li>
                  <li>Telegram bot</li>
                  <li>Backend service</li>
                  <li>Frontend application</li>
                  <li>CI/CD and Docker-based deployment</li>
                </ul>
                <p className="text-[var(--color-text-secondary)] mt-4">
                  It demonstrates the ability to take a product idea from zero
                  to a production-ready system.
                </p>
              </div>
            </div>

            {/* Note */}
            <div className="mt-8 p-4 bg-amber-50 border border-amber-200 rounded-lg max-w-2xl mx-auto">
              <p className="text-amber-800 text-sm">
                <strong>Note:</strong> This demo runs on mock data. In
                production, the app integrates with a Telegram bot backend for
                real vocabulary learning with personalized word selection.
              </p>
            </div>

            {/* CTA */}
            <div className="text-center mt-12">
              <p className="text-[var(--color-text-muted)] mb-4">
                Want to see more projects?
              </p>
              <Link href="/projects" className="btn btn-color-1">
                View All Projects
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
