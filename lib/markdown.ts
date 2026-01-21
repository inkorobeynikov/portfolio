import { remark } from 'remark';
import html from 'remark-html';
import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';

export interface MarkdownContent {
  content: string;
  frontmatter: Record<string, unknown>;
}

export async function parseMarkdown(markdown: string): Promise<string> {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}

export function getMarkdownFile(filePath: string): MarkdownContent {
  const fullPath = path.join(process.cwd(), filePath);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    content,
    frontmatter: data,
  };
}

export async function getMarkdownContent(filePath: string): Promise<{
  html: string;
  frontmatter: Record<string, unknown>;
}> {
  const { content, frontmatter } = getMarkdownFile(filePath);
  const htmlContent = await parseMarkdown(content);

  return {
    html: htmlContent,
    frontmatter,
  };
}
