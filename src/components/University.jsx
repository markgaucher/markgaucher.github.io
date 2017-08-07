import React from 'react';
import Link from 'gatsby-link';

import './University.scss';

const University = ({ degree, duration, link, location, name }) => {
  return (
    <div className="university">
      <h2 className="university__name">
        <a href={link}>
          {name}
        </a>
      </h2>
      <p className="university__degree">
        {degree}
      </p>
      <p className="university__location">
        {location}
      </p>
      <p className="university__duration">
        {duration}
      </p>
    </div>
  );
};

export default University;
