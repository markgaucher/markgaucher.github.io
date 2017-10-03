import React from 'react';

import Github from './icons/Github';
import LinkedIn from './icons/LinkedIn';
import Twitter from './icons/Twitter';

import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        &copy; 2017 <a href="mailto:hello@markgaucher.com">Mark Gaucher</a> | Site built with{' '}
        <a href="https://www.gatsbyjs.org">Gatsby.js</a>
      </p>
      <nav className="footer-menu">
        <ul className="footer-menu__list">
          <li className="footer-menu__list-item">
            <a href="http://www.github.com/markgaucher" target="_blank">
              <Github />
            </a>
          </li>
          <li className="footer-menu__list-item">
            <a href="http://www.twitter.com/markgaucher" target="_blank">
              <Twitter />
            </a>
          </li>
          <li className="footer-menu__list-item">
            <a href="http://www.linkedin.com/in/markgaucher" target="_blank">
              <LinkedIn />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
