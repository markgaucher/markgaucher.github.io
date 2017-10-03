import React from 'react';
import Link from 'gatsby-link';

import Logo from './Logo';

import './Profile.scss';

const Profile = ({ children }) => {
  return (
    <aside className="profile component-transition">
      <div className="profile__content">
        {children}
      </div>
    </aside>
  );
};

export default Profile;
