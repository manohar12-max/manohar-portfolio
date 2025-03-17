import React from 'react'
import ContactInfo from './ContactInfo'
import ContactSocial from './ContactSocial'

const ContactRight = () => {
  return (
    <div className='flex flex-col items-center gap-12'>
      <img className='max-w-[300px]' src="/email-image.png" alt="contact me" />
      <ContactInfo/>
      <ContactSocial/>
    </div>
  )
}

export default ContactRight
