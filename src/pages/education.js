import React from 'react';
import Link from 'gatsby-link';

import University from '../components/University';

const Education = ({ items }) =>
  <div>
    <ul className="education__list list-transition">
      {items.map(item =>
        <li className="education__list-item" key={item.name}>
          <University {...item} />
        </li>
      )}
    </ul>
  </div>;

Education.defaultProps = {
  items: [
    {
      name: 'Carleton University',
      link: 'https://admissions.carleton.ca/programs/interactive-multimedia-and-design-imd/',
      degree: 'Bachelor of Information Technology',
      location: 'Ottawa, Ontario, Canada',
      duration: '2006-2010'
    },
    {
      name: 'Algonquin College',
      link: 'http://www.algonquincollege.com/mediaanddesign/program/bit-interactive-multimedia-and-design/',
      degree: 'Diploma in Interactive Multimedia and Design',
      location: 'Ottawa, Ontario, Canada',
      duration: '2006-2010'
    },
    {
      name: 'University of Saskatchewan',
      link: 'https://www.usask.ca/',
      degree: 'Arts and Science',
      location: 'Saskatoon, Saskatchewan, Canada',
      duration: '2004-2006'
    }
  ]
};

export default Education;
