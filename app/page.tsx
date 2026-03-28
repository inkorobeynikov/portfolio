import Image from "next/image";
import Link from "next/link";
import profilePic from "@/public/profile-photo.jpg";
import CaseStudyCard from "@/components/CaseStudyCard";
import ProjectCard from "@/components/ProjectCard";
import {
  getCaseStudySummaries,
  getHomeContent,
  getProjects,
} from "@/lib/content";

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

const WhatsAppIcon = () => (
  <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.52 3.48A11.9 11.9 0 0012.04 0C5.54 0 .26 5.28.26 11.78c0 2.07.54 4.1 1.56 5.88L0 24l6.5-1.7a11.8 11.8 0 005.54 1.41h.01c6.5 0 11.78-5.28 11.78-11.78 0-3.15-1.23-6.11-3.31-8.45zm-8.48 18.2h-.01a9.88 9.88 0 01-5.03-1.37l-.36-.21-3.86 1.01 1.03-3.76-.23-.38a9.85 9.85 0 01-1.51-5.19c0-5.45 4.43-9.88 9.89-9.88 2.64 0 5.11 1.03 6.98 2.9a9.8 9.8 0 012.89 6.98c0 5.45-4.44 9.89-9.89 9.89zm5.42-7.42c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5a8.98 8.98 0 01-1.68-2.1c-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.08-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.47 1.07 2.88 1.22 3.08.15.2 2.1 3.21 5.09 4.5.71.31 1.27.49 1.7.62.72.23 1.37.2 1.89.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" />
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
  const caseStudies = getCaseStudySummaries();
  const featuredCaseStudy = caseStudies.find((caseStudy) => caseStudy.featured);
  const { howIHelp, technicalSkills } = getHomeContent();

  return (
    <>
      {/* Profile Section */}
      <section id="profile">
        <div className="section__pic-container">
          <Image
            src={profilePic}
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
          <p className="section__text__p2">Product Engineer / Frontend Architect</p>
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
            <a
              href="https://wa.me/48500330884"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon />
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
                Product Engineer and Frontend Architect — I build digital products
                end-to-end, from idea and UX to production-ready code. Strong
                focus on fintech and financial tools. I combine product thinking
                with deep engineering expertise in React, Next.js, TypeScript,
                and Node.js to ship products that actually solve user problems.
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
          <div className="grid gap-6 md:grid-cols-2">
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
        <h1 className="title">Projects & Case Studies</h1>
        <div className="experience-details-container mt-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid gap-6 lg:grid-cols-3 lg:items-stretch">
              {featuredCaseStudy && (
                <CaseStudyCard
                  title={featuredCaseStudy.title}
                  type={featuredCaseStudy.type}
                  description={featuredCaseStudy.description}
                  slug={featuredCaseStudy.slug}
                  status={featuredCaseStudy.status}
                  featured
                />
              )}
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
            <WhatsAppIcon />
            <p>
              <a
                href="https://wa.me/48500330884"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                WhatsApp
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
