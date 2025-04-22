import * as React from 'react'

import Link from './Link'

import * as styles from './Education.module.css'

type EducationProps = {
  degree: string
  duration: string
  link: string
  location: string
  name: string
}

const Education: React.FunctionComponent<EducationProps> = ({
  degree,
  duration,
  link,
  location,
  name,
}) => {
  return (
    <React.Fragment>
      <Link to={link}>{name}</Link>
      <p className={styles['education']}>
        {degree}
        <br />
        {location}
        <br />
        {duration}
      </p>
    </React.Fragment>
  )
}

export default Education
