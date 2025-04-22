import * as React from 'react'
import type { HeadFC, PageProps } from 'gatsby'

import Layout from '../components/Layout'
import Navigation from '../components/Navigation'
import Logo from '../components/Logo'
import AnimatedList, { AnimatedListItem } from '../components/AnimatedList'
import Footer from '../components/Footer'
import Card from '../components/Card'

const ContactPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Logo />
      <Navigation />
      <main style={{ maxWidth: '640px' }}>
        <AnimatedList>
          <AnimatedListItem>
            <Card />
          </AnimatedListItem>
        </AnimatedList>
      </main>
      <Footer />
    </Layout>
  )
}

export default ContactPage

export const Head: HeadFC = () => <title>Mark Gaucher – Contact</title>
