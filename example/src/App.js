import React from 'react'
import { ExampleComponent, Feature, ContactCard } from 'satum-uikit'
import 'satum-uikit/dist/index.css'

const user = {
  uid: 1,
  name: 'Laura Smith',
  photo: 'https://randomuser.me/api/portraits/women/72.jpg',
  rate: { score: '4.9', numberOfReviews: 352 },
  phoneNumber: '4359382910',
  reviewUrl: '/reviews/1',
  email: 'laura.smith@satum.com'
}

const App = () => {
  return (
    <>
      <Feature label='Bedroom' icon='icon-bed'>
        4
      </Feature>
      <ContactCard user={user} />
      <ExampleComponent text='Create React Library Example 😄' />
    </>
  )
}

export default App
