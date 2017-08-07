import React from 'react';
import Link from 'gatsby-link';

import ProgressBar from '../components/ProgressBar';

const Skills = ({ items }) =>
  <div>
    {items.map(item => <ProgressBar key={item.name} {...item} />)}
  </div>;

Skills.defaultProps = {
  items: [
    {
      name: 'HTML',
      description: 'Senior',
      experience: 5
    },
    {
      name: 'CSS (Sass)',
      description: 'Senior',
      experience: 5
    },
    {
      name: 'React.js',
      description: 'Senior',
      experience: 4
    },
    {
      name: 'Node.js',
      description: 'Intermediate',
      experience: 2.5
    },
    {
      name: 'PostgreSQL',
      description: 'Junior',
      experience: 2
    },
    {
      name: 'MongoDB',
      description: 'Intermediate',
      experience: 2.5
    },
    {
      name: 'GraphQL',
      description: 'Intermediate',
      experience: 3
    }
  ]
};

export default Skills;
