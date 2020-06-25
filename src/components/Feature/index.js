import React from 'react'
import styles from './Feature.module.css'

const Feature = ({ icon, label, children }) => {
  return (
    <div className={styles.feature}>
      <span className={styles.featureLabel}>{label}</span>
      <ul className={styles.featureList}>
        <li className={styles.featureValue}>{children}</li>
        {icon && (
          <li className={styles.featureIcon}>
            <svg className={`${icon} icon`}>
              <use xlinkHref={`/assets/icons/icons.svg#${icon}`} />
            </svg>
          </li>
        )}
      </ul>
    </div>
  )
}

export default Feature
