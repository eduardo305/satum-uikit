import React from 'react'
import styles from './CardRow.module.css'

const CardRow = ({ children }) => {
  return <div className={styles.row}>{children}</div>
}

export default CardRow
