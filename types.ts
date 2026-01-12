
export enum ProjectCategory {
  ALL = 'ALL',
  REACT = 'REACT',
  PYTHON = 'PYTHON',
  DESIGN = 'DESIGN'
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  categories: string[];
  githubUrl: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  duration: string;
  description: string;
  skills: string[];
  isCurrent?: boolean;
  type?: 'work' | 'education' | 'internship';
}
