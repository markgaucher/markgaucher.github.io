import * as React from 'react'
import { HeadFC, PageProps } from 'gatsby'

import Layout from '../components/Layout'
import Navigation from '../components/Navigation'
import Logo from '../components/Logo'
import Footer from '../components/Footer'

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Logo />
      <Navigation />
      <main style={{ maxWidth: '640px' }}>
        <h1>Page not found</h1>
        <p>Sorry 😔, we couldn’t find what you were looking for.</p>
      </main>
      <Footer />
    </Layout>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Not found</title>
