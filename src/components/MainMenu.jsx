import React from 'react';
import Link from 'gatsby-link';

import './MainMenu.scss';

const MainMenu = () => {
  return (
    <nav className="main-menu">
      <ul className="main-menu__list">
        <li className="main-menu__list-item">
          <Link
            to="/work-experience"
            className="main-menu__anchor work"
            activeClassName="is-active"
          >
            Work Experience
          </Link>
        </li>
        <li className="main-menu__list-item">
          <Link to="/skills" className="main-menu__anchor skills" activeClassName="is-active">
            Skills
          </Link>
        </li>
        <li className="main-menu__list-item">
          <Link to="/education" className="main-menu__anchor education" activeClassName="is-active">
            Education
          </Link>
        </li>
        <li className="main-menu__list-item">
          <Link to="/about" className="main-menu__anchor about" activeClassName="is-active">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainMenu;
