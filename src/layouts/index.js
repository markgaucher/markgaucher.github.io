/* global window */

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Footer from '../components/Footer';
import Header from '../components/Header';
import MainMenu from '../components/MainMenu';
import Sidebar from '../components/Sidebar';

import { getClassName } from '../app/utils';

import '../app/config.scss';

const TemplateWrapper = ({ children }) => {
  return (
    <div className={`site${getClassName('site')}`}>
      <Helmet
        title="MARK GAUCHER"
        meta={[{ name: 'description', content: 'Sample' }, { name: 'keywords', content: 'sample, something' }]}
      />
      <div className="grid-container grid-container-padded">
        <div className="grid-x grid-margin-x">
          <div className="cell small-12 large-8">
            <Header />
            <MainMenu />
          </div>
        </div>
        <main>
          <div className="grid-x grid-margin-x">
            <div className="cell small-12 large-8">
              {children()}
            </div>
            <div className="cell small-12 large-4">
              <Sidebar />
            </div>
          </div>
          <div className="grid-x grid-margin-x">
            <div className="cell small-12 large-8">
              <Footer />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
