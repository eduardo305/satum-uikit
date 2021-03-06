import React from 'react'
import styles from './Button.module.css'

const Button = ({ icon, label, full = false, ...other }) => {
  const componentStyle = full
    ? `${styles.button} ${styles.full}`
    : `${styles.button}`

  return (
    <button className={componentStyle} {...other}>
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
