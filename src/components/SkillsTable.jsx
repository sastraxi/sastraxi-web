import React from 'react';
import Table from '../elements/Table';

const SKILL_HEADERS = [
  { frontend: 'Front-end' },
  { backend: 'Back-end' },
  { product: 'Product' },
  { devops: 'Devops' },
];

const SKILLS = {
  frontend: [
    'React',
    'Gatsby',
    'styled-components',
    'Webpack',
    'Apollo',
  ],
  backend: ['node.js', 'Babel', 'Apollo Server', 'Java', 'PostgreSQL', 'Redis', 'RabbitMQ'],
  product: ['Trello', 'Confluence', 'JIRA', 'draw.io'],
  devops: ['Docker', 'Google Cloud Platform', 'Ansible'],
};

export default () => (
  <Table
    data={SKILLS}
    headers={SKILL_HEADERS}
  />
);
