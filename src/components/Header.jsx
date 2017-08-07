import React from 'react';
import Link from 'gatsby-link';

import Logo from './Logo';

import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <Logo />
      </Link>
    </header>
  );
};

export default Header;
