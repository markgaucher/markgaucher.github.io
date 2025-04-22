import * as React from 'react'
import styled, { css } from 'styled-components'

import { useMode } from '../context/ThemeContext'
import { ThemedComponent } from '../types'

const Container = styled.div<ThemedComponent>`
  border-radius: 2px;
  display: flex;
  height: 0.25rem;
  position: relative;

  ${({ mode }) => {
    if (mode === 'light') {
      return css`
        background-color: rgb(var(--rgb-dark), 0.05);
      `
    }

    return css`
      background-color: var(--color-light);
    `
  }}
`

const Progress = styled.div<ThemedComponent & ProgressProps>`
  width: ${({ value }) => value}%;

  ${({ mode }) => {
    if (mode === 'light') {
      return css`
        background-color: var(--color-night);
      `
    }

    return css`
      background-color: var(--color-sunset);
    `
  }}
`

interface ProgressBarProps {
  maximum?: number
  value: number
}

interface ProgressProps {
  value: number
}

const ProgressBar: React.FunctionComponent<ProgressBarProps> = ({
  maximum = 100,
  value,
}) => {
  const mode = useMode()

  return (
    <Container mode={mode}>
      <Progress mode={mode} value={(value / maximum) * 100} />
    </Container>
  )
}

export default ProgressBar
