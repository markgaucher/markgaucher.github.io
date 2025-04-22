import '../components/GlobalStyle.css'

import * as React from 'react'

import * as styles from './Layout.module.css'
import { useMode } from '../context/ThemeContext'

const Layout: React.FunctionComponent<any> = ({ children }) => {
  const mode = useMode()

  return (
    <React.Fragment>
      <div className={styles['layout']} data-theme={mode}>
        <div className={styles['layout__content']}>{children}</div>
      </div>
    </React.Fragment>
  )
}

export default Layout
