import React from 'react';
import Link from 'gatsby-link';

import Job from '../components/Job';

const WorkExperience = ({ items }) =>
  <div>
    <ul className="education__list list-transition">
      {items.map(item =>
        <li className="education__list-item" key={item.name}>
          <Job {...item} />
        </li>
      )}
    </ul>
  </div>;

WorkExperience.defaultProps = {
  items: [
    {
      name: 'Normative',
      position: 'Senior Developer',
      duration: 'November 2012 - Present',
      link: 'http://www.normative.com'
    },
    {
      name: 'Thinkable',
      position: 'Technical Director',
      duration: 'September 2010 - Present',
      link: 'http://www.thinkable.ca'
    },
    {
      name: 'Royal Canadian Mounted Police',
      position: 'Web Officer',
      duration: 'March 2008 - August 2012',
      link: 'http://www.rcmp-grc.gc.ca'
    }
  ]
};

export default WorkExperience;
