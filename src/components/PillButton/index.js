import React from 'react'
import styles from './PillButton.module.css'

const Pill = ({ icon, label, full = false, ...other }) => {
  const componentStyle = full
    ? `${styles.pill} ${styles.full}`
    : `${styles.pill}`

  return (
    <button className={componentStyle} {...other}>
      {icon && (
        <svg className={`${icon} icon`}>
          <use xlinkHref={`/assets/icons/icons.svg#${icon}`} />
        </svg>
      )}
      <div>{label}</div>
    </button>
  )
}

export default Pill
