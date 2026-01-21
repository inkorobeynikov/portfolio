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
  demoUrl?: string;
  tags?: string[];
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
      title: 'Learn Words',
      description:
        'Vocabulary learning app with spaced repetition algorithm (SM-2). Built as a Telegram Mini App with full offline demo mode. Features Italian vocabulary with verb conjugations, multiple exercise types, and progress tracking.',
      role: 'Full Stack Developer',
      demoUrl: '/demo',
      tags: ['React 19', 'Redux Toolkit', 'TypeScript', 'Tailwind CSS', 'Vite', 'i18next'],
    },
  ];
}
