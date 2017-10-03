import React from 'react';
import Link from 'gatsby-link';

import ProgressBar from '../components/ProgressBar';

const Skills = ({ items }) =>
  <div className="page">
    <p>
      Trying to create an exhaustive list of the languages and frameworks that I have used
      throughout the course of my career is challenging. Below is an overview of the tools I have
      engaged with on a consistent basis.
    </p>
    <p>
      I have always been eager to further develop and add to my developer toolbox. I have actively
      sought out opportunities to learn and apply new languages. My ability to pick up skills
      quickly has allowed me to contribute to quickly evolving projects in a meaningful way.
    </p>
    <br />
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
      name: 'React Native',
      description: 'Intermediate',
      experience: 3.5
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
