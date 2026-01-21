import fs from 'fs';
import path from 'path';
import { getMarkdownContent, getMarkdownFile } from './markdown';

const CASE_STUDIES_DIR = 'content/case-studies';
const HOME_CONTENT_FILE = 'content/home.md';

export interface CaseStudy {
  slug: string;
  title: string;
  type: string;
  status: string;
  html: string;
  frontmatter: Record<string, unknown>;
}

export interface Project {
  title: string;
  description: string;
  role?: string;
}

export interface HomeContent {
  howIHelp: {
    title: string;
    text: string;
    bullets: string[];
  };
  technicalSkills: {
    title: string;
    categories: Array<{
      title: string;
      level: string;
      description: string;
      items: string[];
    }>;
  };
}


export function getHomeContent(): HomeContent {
  const { frontmatter } = getMarkdownFile(HOME_CONTENT_FILE);
  const howIHelp =
    (frontmatter.howIHelp as HomeContent['howIHelp']) || {
      title: '',
      text: '',
      bullets: [],
    };
  const technicalSkills =
    (frontmatter.technicalSkills as HomeContent['technicalSkills']) || {
      title: '',
      categories: [],
    };

  return {
    howIHelp,
    technicalSkills,
  };
}

export async function getCaseStudy(slug: string): Promise<CaseStudy | null> {
  const filePath = path.join(CASE_STUDIES_DIR, `${slug}.md`);
  const fullPath = path.join(process.cwd(), filePath);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const { html, frontmatter } = await getMarkdownContent(filePath);

  return {
    slug,
    title: (frontmatter.title as string) || slug,
    type: (frontmatter.type as string) || '',
    status: (frontmatter.status as string) || '',
    html,
    frontmatter,
  };
}

export function getAllCaseStudySlugs(): string[] {
  const fullPath = path.join(process.cwd(), CASE_STUDIES_DIR);

  if (!fs.existsSync(fullPath)) {
    return [];
  }

  const files = fs.readdirSync(fullPath);
  return files
    .filter((file) => file.endsWith('.md'))
    .map((file) => file.replace(/\.md$/, ''));
}

export function getProjects(): Project[] {
  return [
    {
      title: 'Applicant Center',
      description:
        'Enterprise form platform at Helmes. Built internal UI library and schema-driven form generator.',
      role: 'Lead Frontend Developer / Frontend Architect',
    },
    {
      title: 'Online Bank Launch',
      description:
        'Greenfield B2C online banking launch at Clevertec / Alfa Bank. Designed frontend architecture and development processes.',
      role: 'Frontend Architect',
    },
    {
      title: 'Frontend Department Leadership',
      description:
        'Head of frontend department at Clevertec. Grew the team, built internal education programs, mentored engineers.',
      role: 'Head of Frontend',
    },
    {
      title: 'Travel Web App',
      description:
        'Flight search and booking web application at Clickavia. React components, forms, API integration, state design.',
      role: 'Frontend Developer',
    },
  ];
}
