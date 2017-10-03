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
      link: 'http://www.normative.com',
      description:
        'Normative is a software innovation firm with a focus on rapidly exploring and assessing the potential of new software experiences.',
      notes: [
        'Created a beacon-based home navigation experience using React Native, Redux and Swift',
        'Contributed to the development of an autonomous robot monitoring system using React and Redux',
        'Built a fully functional media streaming prototype using Angular, Hapi.js and MongoDB'
      ]
    },
    {
      name: 'Thinkable',
      position: 'Technical Director',
      duration: 'September 2010 - Present',
      link: 'http://www.thinkable.ca',
      description:
        'Thinkable is an Ontario based design group specialising in web design and development, graphic design, branding, and illustration. It includes any freelance work I have been involved in since completing my education.',
      notes: [
        'Currently building a front end prototype for a scheduling application using React and Redux',
        'Developed an API for a media sharing application using GraphQL, PostgreSQL, MongoDB and Hapi.js',
        'Built small business websites using content management systems such as WordPress and Drupal'
      ]
    },
    {
      name: 'Royal Canadian Mounted Police',
      position: 'Web Officer',
      duration: 'March 2008 - August 2012',
      link: 'http://www.rcmp-grc.gc.ca',
      notes: [
        'Provided assistance and guidance to policy centres on web accessibility and the use of emerging web technologies',
        'Developed small web applications for internal and external websites, including contributions to the RCMP marijuana grow operations database, and access to information requests',
        'Collaborated with members of other government departments on graphics and design standards as part of the design stream of the User Experience Working Group (UxWG)'
      ]
    }
  ]
};

export default WorkExperience;
