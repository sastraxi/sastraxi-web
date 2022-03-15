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
    'React',
    'Gatsby',
    'Webpack',
    'GraphQL (Apollo, urql)',
    'Typescript',
    'Webpack / Babel',
    'styled-components',
    'performance profiling',
  ],
  backend: [
    'Node.js',
    'Java',
    'Python',
    'PostgreSQL',
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
    'Trello',
    'Productboard',
  ],
  devops: [
    '*nix proficiency',
    'Ansible',
    'Docker',
    'Kubernetes',
    'Google Cloud Platform',
    'Netlify',
    'Heroku',
  ],
  testing: [
    'Jest',
    'JUnit',
    'Selenium',
    'Cypress',
  ],
  ai: [
    'OpenCV',
    'scikit-learn',
    'NumPY',
    'NLTK',
  ],
};

export default () => (
  <Table
    data={SKILLS}
    headers={SKILL_HEADERS}
  />
);
