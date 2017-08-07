import React from 'react';
import Link from 'gatsby-link';

import Logo from './Logo';

import './Sidebar.scss';

const Sidebar = () => {
  return (
    <aside className="sidebar component-transition">
      <div className="sidebar__content">
        <ul>
          <li>
            <Link to="/posts/hello-world">Hello World!</Link>
          </li>
          <li>
            <Link to="/">Lorem ipsum dolar sit amet</Link>
          </li>
          <li>
            <Link to="/">Lorem ipsum dolar sit amet</Link>
          </li>
          <li>
            <Link to="/">Lorem ipsum dolar sit amet</Link>
          </li>
          <li>
            <Link to="/">Lorem ipsum dolar sit amet</Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
