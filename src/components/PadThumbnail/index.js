import React from 'react'
import PadThumbnailCard from './PadThumbnailCard'
import styles from './PadThumbnail.module.css'

const PadThumbnail = ({ pad }) => {
  const { newPad, images, ...other } = pad
  return (
    <div className={styles.thumbnail}>
      <div className={styles.favorite}>
        <svg className='icon-heart-o icon'>
          <use xlinkHref='/icons/icons.svg#icon-heart-o' />
        </svg>
      </div>
      {newPad && <div className={styles.badge}>new</div>}
      {images && (
        <div className='thumbnail__images'>
          <img src={images[0]} alt='pad image' />
        </div>
      )}
      <PadThumbnailCard {...other} />
    </div>
  )
}

export default PadThumbnail
