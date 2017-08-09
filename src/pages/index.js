import React from 'react';
import Link from 'gatsby-link';

import Page from '../components/Page';

const IndexPage = () => {
  return (
    <Page>
      <h1>Hello! I’m a full stack web developer from Toronto.</h1>
      <p>I currently work at Normative, a boutique innovation firm with a focus on designing what’s next.</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis libero vero, dolor optio quibusdam ipsa
        nostrum expedita fugit quam necessitatibus amet, sequi repellendus accusantium adipisci asperiores facere.
        Asperiores, quis libero.
      </p>
      <p>Interested to here more? Get in touch!</p>
      <a href="mailto:hello@markgaucher.com" className="button">
        hello@markgaucher.com
      </a>
    </Page>
  );
};

export default IndexPage;
