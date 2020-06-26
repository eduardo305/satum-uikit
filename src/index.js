import React from 'react'
import styles from './styles.module.css'
import Feature from './components/Feature'
import Card from './components/Card'
import ContactCard from './components/ContactCard'
import './index.css'

export const ExampleComponent = ({ text }) => {
  return (
    <div className={styles.test}>
      Example Component: {text}
      <Feature label='Bedroom' icon='icon-bed'>
        4
      </Feature>
    </div>
  )
}

export { Feature, ContactCard, Card }
