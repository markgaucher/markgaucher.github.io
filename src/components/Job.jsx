import React from 'react';
import Link from 'gatsby-link';

import './Job.scss';

const Job = ({ description, duration, link, name, notes, position }) => {
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
      {description &&
        <p className="job__description">
          {description}
        </p>}
      {notes &&
        <ul className="job__notes">
          {notes.map(note =>
            <li>
              {note}
            </li>
          )}
        </ul>}
    </div>
  );
};

export default Job;
