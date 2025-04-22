import * as React from 'react'

import ThemeContext from '../context/ThemeContext'

import * as styles from './Toggle.module.css'

const Toggle: React.FunctionComponent = () => {
  return (
    <ThemeContext.Consumer>
      {({ mode, toggle }) => (
        <button className={styles['toggle']} data-mode={mode} onClick={toggle}>
          Toggle Mode
        </button>
      )}
    </ThemeContext.Consumer>
  )
}

export default Toggle
