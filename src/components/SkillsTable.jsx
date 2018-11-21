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
    'Apollo',
    'styled-components',
    'react-virtualized',
  ],
  backend: [
    'Node.js',
    'Java',
    'Python',
    'C',
    'GraphQL (Apollo)',
    'PostgreSQL',
    'JOOQ',
    'Redis',
    'ElasticSearch',
    'email deliverability',
    'GLSL',
  ],
  product: [
    'JIRA',
    'Confluence',
    'Trello',
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
