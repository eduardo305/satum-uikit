import React from 'react'
import Card from '../Card'
import CardRow from '../Card/CardRow'
import PhoneNumberReveal from '../PhoneNumberReveal'
import ReviewBadge from '../ReviewBadge'
import styles from './ContactCard.module.css'
import Button from '../Button'

const ContactCard = ({ user }) => {
  return (
    <Card>
      <CardRow>
        <img
          src='https://randomuser.me/api/portraits/women/72.jpg'
          className={styles.photo}
        />
        <h1 className={styles.name}>
          <strong>Adam Magnuss</strong>
        </h1>

        <ReviewBadge rate={4.9} url='url' />
      </CardRow>
      <CardRow>
        <PhoneNumberReveal phoneNumber='544 398 1294' />
      </CardRow>

      <div className={styles.footer}>
        <Button label='Contact Agent' icon='icon-envelope-o' />
      </div>
    </Card>
  )
}

export default ContactCard
