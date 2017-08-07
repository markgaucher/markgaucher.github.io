/* global window */

import React from 'react';
import Link from 'gatsby-link';

import { getClassName } from '../app/utils';

import './Logo.scss';

const Logo = () => {
  return (
    <div className={`logo${getClassName('logo')}`}>
      <span className="logo__circle">
        <span className="logo__name">MARK GAUCHER</span>
      </span>
      <span className="logo__name">MARK GAUCHER</span>
      <span className="logo__description">Full Stack Developer</span>
    </div>
  );
};

export default Logo;
