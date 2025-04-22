import * as React from 'react'

import * as styles from './AnimatedList.module.css'

const AnimatedList: React.FunctionComponent = (props) => (
  <ul className={styles['list']} {...props} />
)

export const AnimatedListItem: React.FunctionComponent = (props) => (
  <li className={styles['list__item']} {...props} />
)

export default AnimatedList
