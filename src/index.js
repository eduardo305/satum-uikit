import React from 'react'
import styles from './styles.module.css'
import './index.css'

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}
