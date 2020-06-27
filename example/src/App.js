import React from 'react'
import {
  ExampleComponent,
  Feature,
  ContactCard,
  PadThumbnail
} from 'satum-uikit'
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

const pad = {
  newPad: true,
  images: [
    'https://photos.zillowstatic.com/cc_ft_384/ISq90stk8ib9ll1000000000.webp'
  ],
  price: '$4000',
  numBed: 2,
  numBath: 2,
  sqft: 1300,
  name: 'Bristol',
  address: {
    streets: '1283 Symbol st'
  }
}

const App = () => {
  return (
    <>
      <Feature label='Bedroom' icon='icon-bed'>
        4
      </Feature>
      <ContactCard user={user} />

      <PadThumbnail pad={pad} />

      <ExampleComponent text='Create React Library Example 😄' />
    </>
  )
}

export default App
