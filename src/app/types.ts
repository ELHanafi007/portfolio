export interface Project {
  name: string;
  summary: string;
  description: string;
  tech: string[];
  liveLink?: string;
  githubLink?: string;
  highlight: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  subtitle: string;
  details: string[];
}

export interface SkillCategory {
  category: string;
  items: string[];
}
