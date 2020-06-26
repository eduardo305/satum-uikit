import React from 'react'
import styles from './Button.module.css'

const Button = ({ icon, label, ...other }) => {
  return (
    <button className={styles.button} {...other}>
      {icon && (
        <svg className={`${icon} icon`}>
          <use xlinkHref={`/assets/icons/icons.svg#${icon}`} />
        </svg>
      )}
      {label}
    </button>
  )
}

export default Button
