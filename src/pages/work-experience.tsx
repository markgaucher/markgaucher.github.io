import type { HeadFC, PageProps } from 'gatsby'
import * as React from 'react'

import AnimatedList, { AnimatedListItem } from '../components/AnimatedList'
import Job from '../components/Job'
import Layout from '../components/Layout'
import Logo from '../components/Logo'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const WorkExperiencePage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Logo />
      <Navigation />
      <main style={{ maxWidth: '640px' }}>
        <AnimatedList>
          <AnimatedListItem>
            <Job
              link="https://my.evidation.com"
              name="Evidation Health"
              roles={[
                {
                  duration: 'January 2023 - Present',
                  highlights: [
                    'Leading a refactor of existing frontend infrastructure to enable per-tenant customization, facilitating company expansion into new business areas.',
                    'Partner with cross-functional teams (design, engineering, and product) to optimize development processes, refine sprint planning, enhance team structure, and streamline release management.',
                    'Act as the front-end technical lead, driving team strategy, architecture decisions, and mentorship to elevate team expertise and deliver high-quality solutions.',
                    'Led the migration of a React Native application to the Expo framework, enabling unified deployment across web, iOS, and Android platforms, improving development efficiency and user experience.',
                    'Partnered with engineering leadership to apply cutting-edge AI developer tools (Cursor, Windsurf), driving faster product development and improved engineering efficiency.',
                  ],
                  title: 'Staff Frontend Engineer',
                },
                {
                  duration: 'January 2020 - December 2022',
                  highlights: [
                    'Led the transition from native iOS and Android applications to React Native, reducing technical debt and streamlining cross-platform development efforts.',
                    'Participated in a weekly on-call rotation, ensuring 99.9% uptime for critical infrastructure relied upon by 250,000+ monthly active users.',
                    'Architected and maintained a robust cross-platform component library, ensuring consistent UI/UX and code reusability across multiple React and React Native applications.',
                    'Provided interim leadership for a team of five full-stack engineers, aligning project priorities and ensuring high-impact deliverables during a critical organizational period.',
                  ],
                  title: 'Senior Software Engineer',
                },
                {
                  duration: 'January 2018 - December 2019',
                  highlights: [
                    'Led the rewrite of a large-scale front-end web application to improve scalability, performance, and maintainability.',
                    'Added new product features that enhanced user engagement and addressed customer needs, increasing daily active users by 50%.',
                  ],
                  title: 'Software Engineer',
                },
              ]}
            />
          </AnimatedListItem>
          <AnimatedListItem>
            <Job
              link="https://www.normative.com"
              name="Normative"
              roles={[
                {
                  duration: 'November 2013 - October 2018',
                  highlights: [
                    'Contributed to all phases of the product development lifecycle, from ideation and design to development and deployment, delivering client-focused solutions.',
                    'Built production-ready web applications, implementing modern web development best practices and ensuring scalable and maintainable codebases.',
                    'Prototyped innovative product concepts for internal projects and client initiatives, driving new opportunities and enhancing stakeholder engagement.',
                  ],
                  title: 'Senior Developer',
                },
              ]}
            />
          </AnimatedListItem>
          <AnimatedListItem>
            <Job
              link="https://www.canada.ca"
              name="Government of Canada"
              roles={[
                {
                  duration: 'January 2008 - August 2013',
                  highlights: [
                    'Ensured WCAG 2.0 AA compliance and cross-browser compatibility (IE 6+, Firefox, Chrome, Safari, Opera) for web-based content, delivering accessible and consistent user experiences.',
                    'Managed and maintained web content for high-profile Government of Canada agencies, delivering accurate and timely updates.',
                    'Contributed to cross-departmental working groups to improve design and engineering standards across Government of Canada web properties, driving innovation and consistency.',
                  ],
                  title: 'Information Specialist (IS-03)',
                },
              ]}
            />
          </AnimatedListItem>
        </AnimatedList>
      </main>
      <Footer />
    </Layout>
  )
}

export default WorkExperiencePage

export const Head: HeadFC = () => <title>Mark Gaucher – Work Experience</title>
