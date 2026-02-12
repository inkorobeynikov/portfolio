import Image from "next/image";
import Link from "next/link";
import { getHomeContent, getProjects } from "@/lib/content";

// SVG Icons as components
const LinkedInIcon = () => (
  <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const TelegramIcon = () => (
  <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
  </svg>
);

const EmailIcon = () => (
  <svg
    className="icon email-icon"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);

const ExperienceIcon = () => (
  <svg
    className="icon"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);

const EducationIcon = () => (
  <svg
    className="icon"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 14l9-5-9-5-9 5 9 5z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
    />
  </svg>
);

export default function HomePage() {
  const projects = getProjects();
  const { howIHelp, technicalSkills } = getHomeContent();

  return (
    <>
      {/* Profile Section */}
      <section id="profile">
        <div className="section__pic-container">
          <Image
            src="/profile.JPG"
            alt="Ivan Karabeinikau profile picture"
            width={400}
            height={400}
            priority
            className="rounded-full object-cover"
          />
        </div>
        <div className="section__text">
          <p className="section__text__p1">Hello, I&apos;m</p>
          <h1 className="title">Ivan Karabeinikau</h1>
          <p className="section__text__p2">Lead Frontend Developer</p>
          <div className="btn-container">
            <a
              href="/KarabeinikauIvanCV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-color-2"
            >
              Download CV
            </a>
            <Link href="/contact" className="btn btn-color-1">
              Contact Info
            </Link>
          </div>
          <div id="socials-container">
            <a
              href="https://www.linkedin.com/in/ivan-karabeinikau-9250a8120/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </a>
            <a
              href="https://t.me/ivankarabeinikau"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
            >
              <TelegramIcon />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative mx-4 md:mx-16 lg:mx-40 py-16">
        <p className="section__text__p1">Get To Know More</p>
        <h1 className="title">About Me</h1>
        <div className="section-container mt-8">
          <div className="about-details-container">
            <div className="about-containers">
              <div className="details-container">
                <div className="flex items-start gap-4">
                  <ExperienceIcon />
                  <div>
                    <h3 className="font-semibold">When I’m most useful</h3>
                    <ul className="mt-3 list-disc list-inside text-[var(--color-text-secondary)] space-y-1">
                      <li>Greenfield projects from zero to production</li>
                      <li>Complex or forms-heavy frontend systems</li>
                      <li>Legacy codebases that need stabilization</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="details-container">
                <div className="flex items-start gap-4">
                  <EducationIcon />
                  <div>
                    <h3 className="font-semibold">
                      Typical reasons to hire me
                    </h3>
                    <ul className="mt-3 list-disc list-inside text-[var(--color-text-secondary)] space-y-1">
                      <li>Architecture is unclear or overgrown</li>
                      <li>Delivery became unpredictable</li>
                      <li>Frontend slows down the whole product</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-container">
              <p>
                Lead Frontend Developer / Frontend Architect with a focus on
                building and stabilizing complex frontend systems. From
                greenfield launches and architectural decisions to refactoring
                legacy codebases and creating internal tooling that speeds up
                delivery. I work with React, Next.js, TypeScript, and Node.js
                ecosystem. Available for Upwork, part-time, consulting, and
                short-term projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How I Help Section */}
      <section
        id="how-i-help"
        className="relative mx-4 md:mx-16 lg:mx-40 py-16"
      >
        <h1 className="title">{howIHelp.title}</h1>
        <div className="experience-details-container mt-8">
          <div className="details-container text-left">
            <p className="text-[var(--color-text-secondary)] leading-relaxed whitespace-pre-line">
              {howIHelp.text}
            </p>
            <ul className="mt-6 list-disc list-inside space-y-2 text-[var(--color-text-secondary)]">
              {howIHelp.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section id="skills" className="relative mx-4 md:mx-16 lg:mx-40 py-16">
        <h1 className="title">{technicalSkills.title}</h1>
        <div className="experience-details-container mt-8">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {technicalSkills.categories.map((category) => (
              <div key={category.title} className="details-container text-left">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h2 className="text-xl font-semibold text-[var(--color-text-primary)]">
                    {category.title}
                  </h2>
                  <span className="text-xs uppercase tracking-wider text-[var(--color-text-muted)]">
                    {category.level}
                  </span>
                </div>
                <p className="text-[var(--color-text-secondary)] mt-4 leading-relaxed whitespace-pre-line">
                  {category.description}
                </p>
                <ul className="mt-5 list-disc list-inside text-[var(--color-text-secondary)] space-y-1">
                  {category.items.map((item) => (
                    <li key={`${category.title}-${item}`}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative mx-4 md:mx-16 lg:mx-40 py-16">
        <p className="section__text__p1">Browse My Recent</p>
        <h1 className="title">Projects</h1>
        <div className="experience-details-container mt-8">
          <div className="about-containers flex-wrap justify-center">
            {projects.slice(0, 3).map((project) => (
              <div
                key={project.title}
                className="details-container color-container max-w-sm"
              >
                <div className="article-container">
                  <div className="w-full h-48 bg-gray-200 rounded-2xl flex items-center justify-center mb-4">
                    <span className="text-gray-400 text-lg">
                      {project.title}
                    </span>
                  </div>
                </div>
                <h2 className="experience-sub-title project-title">
                  {project.title}
                </h2>
                <p className="text-[var(--color-text-secondary)] text-sm mb-4 px-2">
                  {project.description}
                </p>
                {project.role && (
                  <p className="text-[var(--color-text-muted)] text-xs mb-4">
                    {project.role}
                  </p>
                )}
                <div className="btn-container">
                  <Link
                    href="/projects"
                    className="btn btn-color-2 project-btn text-sm"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mt-8">
          <Link href="/projects" className="btn btn-color-1">
            View All Projects
          </Link>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="flex justify-center flex-col mx-4 md:mx-16 lg:mx-40 py-16"
      >
        <p className="section__text__p1">Get in Touch</p>
        <h1 className="title">Contact Me</h1>
        <div className="contact-info-upper-container">
          <div className="contact-info-container">
            <EmailIcon />
            <p>
              <a
                href="mailto:in.korobeynikov@gmail.com"
                className="hover:underline"
              >
                in.korobeynikov@gmail.com
              </a>
            </p>
          </div>
          <div className="contact-info-container">
            <TelegramIcon />
            <p>
              <a
                href="https://t.me/ivankarabeinikau"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                @ivankarabeinikau
              </a>
            </p>
          </div>
          <div className="contact-info-container">
            <LinkedInIcon />
            <p>
              <a
                href="https://www.linkedin.com/in/ivan-karabeinikau-9250a8120/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                LinkedIn
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
