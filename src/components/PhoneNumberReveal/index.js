import React, { useState, Fragment } from 'react'
import styles from './PhoneNumberReveal.module.css'

const PhoneNumberReveal = ({ phoneNumber }) => {
  const [display, setDisplay] = useState(false)

  const toggleDisplay = () => setDisplay(!false)

  const togglePhoneNumber = () => {
    if (display) {
      return <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
    } else {
      return (
        <>
          <b>
            <div style={{ marginRight: '10px' }}>{`${phoneNumber.substr(
              0,
              3
            )}`}</div>
            <ul className={styles.mask}>
              <li />
              <li />
              <li />
            </ul>
            <ul className={styles.mask}>
              <li />
              <li />
              <li />
            </ul>
          </b>
          <button className={styles.link} onClick={toggleDisplay}>
            Show number
          </button>
        </>
      )
    }
  }

  return <div className={styles.phoneNumber}>{togglePhoneNumber()}</div>
}

export default PhoneNumberReveal
