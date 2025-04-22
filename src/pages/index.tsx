import type { HeadFC, PageProps } from 'gatsby'
import * as React from 'react'

import Layout from '../components/Layout'
import Link from '../components/Link'
import Logo from '../components/Logo'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Logo />
      <Navigation />
      <main style={{ maxWidth: '640px' }}>
        <h1>Hello! I’m a staff frontend engineer based in Ottawa.</h1>
        <p>
          With a career spanning over a decade, I have established a reputation
          as an architect of high quality user interfaces and seamless web,
          mobile, and native applications.
        </p>
        <p>
          I have significant experience building high quality prototypes, using
          new technologies and frameworks on the fly, and participating
          effectively in multi-disciplinary teams. This has allowed me to
          contribute to projects for clients ranging from small startups to
          large corporations.
        </p>
        <p>
          I'm a passionate problem-solver. I enjoy hearing about big, new ideas
          and figuring out how to make them happen. Interested in hearing more?
          Please get in touch!
        </p>
        <Link to="mailto:hello@markgaucher.com">hello@markgaucher.com</Link>
      </main>
      <Footer />
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home</title>
