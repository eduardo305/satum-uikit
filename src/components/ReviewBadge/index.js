import React from 'react'
import styles from './ReviewBadge.module.css'

const ReviewBadge = ({ url, rate }) => {
  return (
    <div className={styles.reviewBadge}>
      <div className={styles.column}>
        <svg className='icon-star-1 icon'>
          <use xlinkHref='/assets/icons/icons.svg#icon-star-1' />
        </svg>
      </div>
      <div className={styles.column}>{`${rate}/5`}</div> <a href={url}>[123]</a>
    </div>
  )
}

export default ReviewBadge
