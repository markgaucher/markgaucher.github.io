import * as React from 'react'
import type { HeadFC, PageProps } from 'gatsby'

import Layout from '../components/Layout'
import Navigation from '../components/Navigation'
import Logo from '../components/Logo'
import ProgressBar from '../components/ProgressBar'

const BlogPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Logo />
      <Navigation />
      <main>
        <div class="progress-bar">
          <div class="progress-bar__name">
            HTML<span class="progress-bar__description">Senior</span>
          </div>
          <ProgressBar value={50} />
        </div>
        <div class="progress-bar">
          <div class="progress-bar__name">
            HTML<span class="progress-bar__description">Senior</span>
          </div>
          <ProgressBar value={40} />
        </div>
        <div class="progress-bar">
          <div class="progress-bar__name">
            HTML<span class="progress-bar__description">Senior</span>
          </div>
          <ProgressBar value={20} />
        </div>
        <div class="progress-bar">
          <div class="progress-bar__name">
            HTML<span class="progress-bar__description">Senior</span>
          </div>
          <ProgressBar value={90} />
        </div>
      </main>
    </Layout>
  )
}

export default BlogPage

export const Head: HeadFC = () => <title>Skills</title>
