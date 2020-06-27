import React, { Fragment } from 'react'
import Card from '../../Card'
import renderContent from './renderContent'

import styles from './PadThumbnailCard.module.css'

const PadThumbnailCard = ({
  rent = true,
  type = 'apartment',
  price,
  numBed,
  numBath,
  sqft,
  name,
  address
}) => {
  const renderHeader = () => {
    return (
      <>
        <div>{rent ? 'For rent' : 'For sale'}</div>
        <div>{type}</div>
      </>
    )
  }

  const renderFooter = () => {
    return (
      <>
        {name && <div>{name}</div>}
        <div>{address.streets}</div>
      </>
    )
  }

  return (
    <div className={styles.padThumbnailCard}>
      <Card>
        <div className={`${styles.header} ${styles.section}`}>
          {renderHeader()}
        </div>
        <div className={`${styles.content} ${styles.section}`}>
          {renderContent(price, numBed, numBath, sqft)}
        </div>
        <div className={`${styles.footer} ${styles.section}`}>
          {renderFooter()}
        </div>
      </Card>
    </div>
  )
}

export default PadThumbnailCard
