import React from 'react'

const ExperienceInfo = ({n,text}) => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <p className='font-bold text-cyan text-6xl'>{n}</p>
      <p className='font-bold text-xl text-light-grey uppercase -mt-3'>{text}</p>

    </div>
  )
}

export default ExperienceInfo
