import dayjs from 'dayjs'
import { Link } from 'gatsby'
import * as React from 'react'

import * as styles from './Logo.module.css'

const Logo: React.FunctionComponent = () => {
  return (
    <Link className={styles['logo']} to="/">
      <div className={styles['logo__circle']}>
        <div
          className={styles['logo__background']}
          style={{
            transform: `translateY(${-(dayjs().hour() / 24) * 90}%)`,
          }}
        />
        <div className={styles['logo__inset']}>Mark Gaucher</div>
      </div>
      <div className={styles['logo__name']}>Mark Gaucher</div>
    </Link>
  )
}

export default Logo
