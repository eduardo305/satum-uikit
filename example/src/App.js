import React from 'react'
import { ExampleComponent, Feature, ContactCard } from 'satum-uikit'
import 'satum-uikit/dist/index.css'

const App = () => {
  return (
    <>
      <Feature label='Bedroom' icon='icon-bed'>
        4
      </Feature>
      <ContactCard />
      <ExampleComponent text='Create React Library Example 😄' />
    </>
  )
}

export default App
