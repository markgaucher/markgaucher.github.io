import { Link as GatsbyLink } from 'gatsby'
import * as React from 'react'

import ThemeContext from '../context/ThemeContext'

import Toggle from './Toggle'

import * as styles from './Navigation.module.css'

const Navigation: React.FunctionComponent = () => {
  return (
    <ThemeContext.Consumer>
      {({ mode, toggle }) => (
        <nav>
          <ul className={styles['navigation']}>
            <li>
              <GatsbyLink
                activeClassName={styles['navigation__active']}
                className={styles['navigation__link']}
                to="/work-experience"
              >
                <span className={styles['navigation__text']}>
                  Work Experience
                </span>
              </GatsbyLink>
            </li>
            <li>
              <GatsbyLink
                activeClassName={styles['navigation__active']}
                className={styles['navigation__link']}
                to="/education"
              >
                <span className={styles['navigation__text']}>Education</span>
              </GatsbyLink>
            </li>
            <li>
              <GatsbyLink
                activeClassName={styles['navigation__active']}
                className={styles['navigation__link']}
                to="/contact"
              >
                <span className={styles['navigation__text']}>Contact</span>
              </GatsbyLink>
            </li>
            <li>
              <Toggle />
            </li>
          </ul>
        </nav>
      )}
    </ThemeContext.Consumer>
  )
}

export default Navigation
