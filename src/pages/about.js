import React from 'react';
import Link from 'gatsby-link';

import Page from '../components/Page';
import Profile from '../components/Profile';

import Github from '../components/icons/Github';
import LinkedIn from '../components/icons/LinkedIn';
import Twitter from '../components/icons/Twitter';

const About = () => {
  return (
    <Page>
      <Profile>
        <div className="grid-x grid-margin-x">
          <div className="cell shrink">
            <img
              src={require('../assets/images/mark-gaucher.jpg')}
              alt=""
              className="profile__photo"
            />
          </div>
          <div className="cell auto">
            <h1>Mark Gaucher</h1>
            <p><a href="mailto:hello@markgaucher.com">hello@markgaucher.com</a></p>
            <p>Husband, puppy daddy, beer drinker. Senior developer at @normativedesign.</p>
          </div>
        </div>
      </Profile>
    </Page>
  );
};

export default About;
