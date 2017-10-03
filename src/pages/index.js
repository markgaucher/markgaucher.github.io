import React from 'react';
import Link from 'gatsby-link';

import Page from '../components/Page';

const IndexPage = () => {
  return (
    <Page>
      <h1>Hello! I’m a full stack web developer currently located in Toronto.</h1>
      <p>
        For the past five years I have worked at Normative, a software innovation firm with a focus
        on rapidly exploring and assessing the potential of new software experiences.
      </p>
      <p>
        I have significant experience building high quality prototypes, using new technologies and
        frameworks on the fly, and participating effectively in multi-disciplinary teams. This has
        allowed me to contribute to projects for clients ranging from small startups to large
        corporations.
      </p>
      <p />
      <p>
        I'm a passionate problem-solver. I enjoy hearing about big, new ideas and figuring out how
        to make them happen. Interested in hearing more? Please get in touch!
      </p>
      <a href="mailto:hello@markgaucher.com" className="button">
        hello@markgaucher.com
      </a>
    </Page>
  );
};

export default IndexPage;
