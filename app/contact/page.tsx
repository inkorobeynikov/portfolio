import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Ivan Karabeinikau for frontend development, architecture, and consulting.",
};

// SVG Icons
const EmailIcon = () => (
  <svg
    className="w-8 h-8"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);

const TelegramIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.52 3.48A11.9 11.9 0 0012.04 0C5.54 0 .26 5.28.26 11.78c0 2.07.54 4.1 1.56 5.88L0 24l6.5-1.7a11.8 11.8 0 005.54 1.41h.01c6.5 0 11.78-5.28 11.78-11.78 0-3.15-1.23-6.11-3.31-8.45zm-8.48 18.2h-.01a9.88 9.88 0 01-5.03-1.37l-.36-.21-3.86 1.01 1.03-3.76-.23-.38a9.85 9.85 0 01-1.51-5.19c0-5.45 4.43-9.88 9.89-9.88 2.64 0 5.11 1.03 6.98 2.9a9.8 9.8 0 012.89 6.98c0 5.45-4.44 9.89-9.89 9.89zm5.42-7.42c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5a8.98 8.98 0 01-1.68-2.1c-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.08-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.47 1.07 2.88 1.22 3.08.15.2 2.1 3.21 5.09 4.5.71.31 1.27.49 1.7.62.72.23 1.37.2 1.89.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export default function ContactPage() {
  const services = [
    "Product development: from idea and UX to working MVP",
    "Frontend architecture: scalable app structure, module boundaries, standards, DX",
    "Fintech tools: calculators, dashboards, data-driven interfaces",
    "Greenfield launches: setup from zero, CI/CD, conventions, core app skeleton",
    "AI-assisted development: Claude Code, Copilot, custom agent workflows",
  ];

  return (
    <section className="mx-4 md:mx-16 lg:mx-40 py-16 min-h-screen">
      {/* Back link */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] no-underline transition-colors mb-8"
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

      {/* Header */}
      <div className="text-center mb-12">
        <p className="section__text__p1">Get in Touch</p>
        <h1 className="title">Contact Me</h1>
        <p className="text-[var(--color-text-secondary)] mt-4">
          I&apos;m open to product engineering roles, consulting, and
          collaboration on fintech projects.
        </p>
      </div>

      {/* Contact Cards */}
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mb-12 max-w-5xl mx-auto">
        {/* Email */}
        <div className="details-container">
          <EmailIcon />
          <h3 className="font-semibold mt-4 mb-2">Email</h3>
          <a
            href="mailto:in.korobeynikov@gmail.com"
            className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
          >
            in.korobeynikov@gmail.com
          </a>
        </div>

        {/* Telegram */}
        <div className="details-container">
          <TelegramIcon />
          <h3 className="font-semibold mt-4 mb-2">Telegram (preferred)</h3>
          <a
            href="https://t.me/ivankarabeinikau"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
          >
            @ivankarabeinikau
          </a>
        </div>

        {/* WhatsApp */}
        <div className="details-container">
          <WhatsAppIcon />
          <h3 className="font-semibold mt-4 mb-2">WhatsApp</h3>
          <a
            href="https://wa.me/48500330884"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
          >
            +48 500 330 884
          </a>
        </div>

        {/* LinkedIn */}
        <div className="details-container">
          <LinkedInIcon />
          <h3 className="font-semibold mt-4 mb-2">LinkedIn</h3>
          <a
            href="https://www.linkedin.com/in/ivan-karabeinikau-9250a8120/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
          >
            Ivan Karabeinikau
          </a>
        </div>
      </div>

      {/* Availability */}
      <div className="details-container max-w-2xl mx-auto mb-12 p-8">
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="w-3 h-3 rounded-full bg-[var(--color-success)] animate-pulse"></span>
          <span className="font-semibold text-[var(--color-success)]">
            Currently Available
          </span>
        </div>
        <p className="text-[var(--color-text-secondary)]">
          Timezone: Europe/Warsaw
        </p>
        <p className="text-[var(--color-text-muted)] mt-2 text-sm">
          Product roles · Consulting · Fintech projects
        </p>
      </div>

      {/* Services */}
      <div className="max-w-3xl mx-auto">
        <h2 className="title text-2xl mb-8">What I Can Help With</h2>
        <div className="space-y-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="details-container color-container flex items-start gap-4 text-left p-4"
            >
              <svg
                className="w-5 h-5 shrink-0 mt-0.5 text-[var(--color-success)]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <p className="text-[var(--color-text-secondary)] text-sm">
                {service}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-16">
        <p className="text-[var(--color-text-muted)] mb-6">
          Ready to discuss your project?
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="mailto:in.korobeynikov@gmail.com"
            className="btn btn-color-1"
          >
            Send me an email
          </a>
          <a
            href="https://t.me/ivankarabeinikau"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-color-2"
          >
            Message on Telegram
          </a>
          <a
            href="https://wa.me/48500330884"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-color-2"
          >
            Message on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
