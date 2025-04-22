import * as React from 'react'

import * as styles from './Card.module.css'

const Card: React.FunctionComponent = () => {
  return (
    <div className={styles['card']}>
      <img
        className={styles['card__image']}
        src={require('../assets/profile.jpeg').default}
        alt=""
      />
      <div>
        <h2 className={styles['card__name']}>Mark Gaucher</h2>
        <a href="mailto:hello@markgaucher.com">hello@markgaucher.com</a>
        <p className={styles['card__description']}>
          Husband, father, dog owner, Blue Jays fan. Staff frontend engineer at{' '}
          <a href="http://github.com/evidation-health">@evidation-health.</a>
        </p>
      </div>
    </div>
  )
}

export default Card
