import React from 'react';
import Link from 'gatsby-link';

import './Job.scss';

const Job = ({ duration, link, name, position }) => {
  return (
    <div className="job">
      <h2 className="job__name">
        <a href={link} target="_blank">
          {name}
        </a>
      </h2>
      <p className="job__position">
        {position}
      </p>
      <p className="job__duration">
        {duration}
      </p>
    </div>
  );
};

export default Job;
