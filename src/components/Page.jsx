import React from 'react';

import './Page.scss';

const Page = ({ children, type }) => {
  let classNames = 'page';
  if (type) {
    classNames += ` page--${type}`;
  }

  return (
    <div className={classNames}>
      {children}
    </div>
  );
};

export default Page;
