import React from 'react'
import Card from '../Card'
import CardRow from '../Card/CardRow'
import PhoneNumberReveal from '../PhoneNumberReveal'
import ReviewBadge from '../ReviewBadge'
import styles from './ContactCard.module.css'
import Button from '../Button'

const ContactCard = ({
  user: { photo, name, rate, phoneNumber, reviewUrl }
}) => {
  return (
    <Card>
      <CardRow>
        <img src={photo} className={styles.photo} />
        <h1 className={styles.name}>
          <strong>{name}</strong>
        </h1>

        {rate && <ReviewBadge rate={rate} url={reviewUrl} />}
      </CardRow>
      <CardRow>
        <PhoneNumberReveal phoneNumber={phoneNumber} />
      </CardRow>

      <div className={styles.footer}>
        <Button label='Contact Agent' icon='icon-envelope-o' />
      </div>
    </Card>
  )
}

export default ContactCard
