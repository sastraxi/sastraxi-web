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
    'Express',
    'Babel',
    'Apollo Server',
    'PostgreSQL',
    'Redis',
    'RabbitMQ',
    'ElasticSearch',
  ],
  product: [
    'Trello',
    'Confluence',
    'JIRA',
    'draw.io',
  ],
  devops: [
    '*nix proficiency',
    'Docker',
    'Google Cloud Platform',
    'Ansible',
    'Netlify',
  ],
  testing: [
    'Jest',
    'TestCafe',
    'JUnit',
    'Selenium',
  ],
  ai: [
    'OpenCV',
    'scikit-learn',
    'numpy',
  ],
};

export default () => (
  <Table
    data={SKILLS}
    headers={SKILL_HEADERS}
  />
);
