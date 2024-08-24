import React from 'react';
import Table from '../elements/Table';

const SKILL_HEADERS = [
  { frontend: 'Front-end' },
  { backend: 'Back-end' },
  { testing: 'Testing' },
  { product: 'Product' },
  { devops: 'Devops' },
  { ai: 'AI / ML' },
];

const SKILLS = {
  frontend: [
    'Typescript',
    'React',
    'react-query',
    'pnpm',
    'tailwind',
    'vite',
    'GraphQL (Apollo, urql)',
    'performance profiling',
  ],
  backend: [
    'Node.js',
    'deno',
    'Java',
    'Python',
    'PostgreSQL',
    'Snowflake',
    'MySQL',
    'Prisma',
    'Graphile',
    'Redis',
    'ElasticSearch',
    'email deliverability',
  ],
  product: [
    'Jira',
    'Confluence',
    'Productboard',
  ],
  devops: [
    'Linux/BSD',
    'Docker',
    'Kubernetes',
    'AWS/GCP',
    'Netlify',
    'Heroku',
  ],
  testing: [
    'pytest',
    'Jest',
    'react-testing-library',
    'Playwright',
    'Cypress',
  ],
  ai: [
    'OpenCV',
    'scikit-learn',
    'NumPY',
    'NLTK',
    'RAG',
    'Snowflake Cortex',
  ],
};

export default () => (
  <Table
    data={SKILLS}
    headers={SKILL_HEADERS}
  />
);
