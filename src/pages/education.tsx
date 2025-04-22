import * as React from 'react'
import type { HeadFC, PageProps } from 'gatsby'

import Layout from '../components/Layout'
import Navigation from '../components/Navigation'
import Logo from '../components/Logo'
import AnimatedList, { AnimatedListItem } from '../components/AnimatedList'
import Education from '../components/Education'
import Footer from '../components/Footer'

const EducationPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Logo />
      <Navigation />
      <main style={{ maxWidth: '640px' }}>
        <AnimatedList>
          <AnimatedListItem>
            <Education
              degree="Bachelor of Information Technology"
              duration="2006-2010"
              link="https://admissions.carleton.ca/programs/interactive-multimedia-and-design-imd/"
              location="Ottawa, Ontario, Canada"
              name="Carleton University"
            />
          </AnimatedListItem>
          <AnimatedListItem>
            <Education
              degree="Diploma in Interactive Multimedia and Design"
              duration="2006-2010"
              link="http://www.algonquincollege.com/mediaanddesign/program/bit-interactive-multimedia-and-design/"
              location="Ottawa, Ontario, Canada"
              name="Algonquin College"
            />
          </AnimatedListItem>
          <AnimatedListItem>
            <Education
              degree="Arts and Science"
              duration="2004-2006"
              link="https://www.usask.ca/"
              location="Saskatoon, Saskatchewan, Canada"
              name="University of Saskatchewan"
            />
          </AnimatedListItem>
        </AnimatedList>
      </main>
      <Footer />
    </Layout>
  )
}

export default EducationPage

export const Head: HeadFC = () => <title>Mark Gaucher – Education</title>
