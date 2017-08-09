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
            <Link to="/posts/front-end-development">Front End Development and Me</Link>
            <div className="tag">About</div>
          </li>
          <li>
            <Link to="/posts/back-end-development">Back End Development and Me</Link>
            <div className="tag">About</div>
          </li>
          <li>
            <Link to="/posts/graphql-introduction">GraphQL: Introduction</Link>
            <div className="tag">Tutorial</div>
          </li>
          <li>
            <Link to="/posts/graphql-authentication">GraphQL: Authentication</Link>
            <div className="tag">Tutorial</div>
          </li>
          <li>
            <Link to="/posts/hello-world">Hello World!</Link>
            <div className="tag">Article</div>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
