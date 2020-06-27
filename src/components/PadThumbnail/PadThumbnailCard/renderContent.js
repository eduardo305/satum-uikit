import React, { Fragment } from 'react'
import styles from './PadThumbnailCard.module.css'

const renderBody = (price, numBed, numBath, sqft) => {
  const renderFeature = ({ value: numBed, icon = undefined }) => {
    return (
      <div className={styles.feature}>
        <span className={styles.featureValue}>{numBed}</span>
        <div className={styles.featureIcon}>
          {icon?.type === 'svg-sprite' ? (
            <svg className={`${icon.name} icon`}>
              <use xlinkHref={`/assets/icons/icons.svg#${icon.name}`} />
            </svg>
          ) : (
            <img
              src='/assets/icons/icons-bath-2.svg'
              style={{ width: '14px' }}
            />
          )}
        </div>
      </div>
    )
  }

  return (
    <>
      <div className={styles.priceSection}>{price}</div>
      <ul className={styles.featuresSection}>
        <li className={styles.featureItem}>
          {renderFeature({
            value: numBed,
            icon: { name: 'icon-bed', type: 'svg-sprite' }
          })}
        </li>
        <li>
          {renderFeature({
            value: numBath,
            icon: { name: 'icons-bath-2', type: 'svg-single' }
          })}
        </li>
        <li>
          {renderFeature({
            value: sqft,
            icon: { name: 'icon-object-ungroup', type: 'svg-sprite' }
          })}
        </li>
      </ul>
    </>
  )
}

export default renderBody
