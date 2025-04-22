import { Link as GatsbyLink, GatsbyLinkProps } from 'gatsby'
import * as React from 'react'

import * as styles from './Link.module.css'

const Link: React.FunctionComponent<GatsbyLinkProps<any>> = ({
  children,
  to,
  ...props
}) => {
  return (
    <GatsbyLink className={styles['link']} to={to} {...props}>
      <div className={styles['link__text']}>{children}</div>
    </GatsbyLink>
  )
}

export default Link
