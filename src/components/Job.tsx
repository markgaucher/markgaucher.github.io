import * as React from 'react'

import * as styles from './Job.module.css'

import Link from './Link'

type JobRole = {
  duration: string
  highlights: string[]
  title: string
}

type JobProps = {
  link: string
  name: string
  roles: JobRole[]
}

const Job: React.FunctionComponent<JobProps> = ({ link, name, roles }) => {
  return (
    <article>
      <Link rel="external" target="_blank" to={link}>
        {name}
      </Link>
      {roles.map((role, index) => {
        return (
          <div className={styles['job']} key={`index-${index}`}>
            <div className={styles['job__meta']}>
              <p className={styles['job__position']}>{role.title}</p>
              <p className={styles['job__duration']}>{role.duration}</p>
            </div>
            <ul className={styles['job__highlights']}>
              {(role.highlights ?? []).map((highlight, index) => {
                return <li key={`index-${index}`}>{highlight}</li>
              })}
            </ul>
          </div>
        )
      })}
    </article>
  )
}

export default Job
