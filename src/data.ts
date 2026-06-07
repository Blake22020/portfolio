export interface StackItem {
  sym: string
  name: string
  type: string
}

export interface StackCategory {
  cat: string
  items: StackItem[]
}

export interface Project {
  num: string
  name: string
  desc: string
  tags: string[]
  site: string
  github: string
}

export const STACK: StackCategory[] = [
  {
    cat: 'Frontend',
    items: [
      { sym: 'TS', name: 'TypeScript', type: 'language' },
      { sym: 'Re', name: 'React', type: 'library' },
      { sym: 'Tw', name: 'Tailwind', type: 'css framework' },
      { sym: 'HC', name: 'HTML & CSS', type: 'markup' },
      { sym: 'JS', name: 'JavaScript', type: 'language' },
    ],
  },
  {
    cat: 'Backend',
    items: [
      { sym: 'No', name: 'Node.js', type: 'runtime' },
      { sym: 'Ex', name: 'Express.js', type: 'framework' },
      { sym: 'Mg', name: 'MongoDB', type: 'database' },
    ],
  },
  {
    cat: 'DevOps',
    items: [
      { sym: 'Lx', name: 'Linux', type: 'os' },
      { sym: 'Dk', name: 'Docker', type: 'containers' },
    ],
  },
  {
    cat: 'AI Tools',
    items: [
      { sym: 'Cl', name: 'Claude', type: 'assistant' },
      { sym: 'Cc', name: 'Claude Code', type: 'agentic dev' },
      { sym: 'Cd', name: 'Claude Design', type: 'ui / design' },
    ],
  },
]

export const PROJECTS: Project[] = [
  {
    num: '01',
    name: 'gblake',
    desc: 'A text-only social network — no images, no noise, just words. Built full-stack with a React + Tailwind frontend and a Node.js / Express API backed by MongoDB, deployed on Linux.',
    tags: ['TypeScript', 'React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind', 'Linux'],
    site: '#',
    github: '#',
  },
]
