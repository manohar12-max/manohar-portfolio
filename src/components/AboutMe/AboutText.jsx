import React from 'react'

const AboutText = () => {
  return (
    <div className='flex flex-col gap-4 h-full lg:items-start sm:items-center'>
      <h1 className='lg:text-left md:text-center text-6xl text-cyan'>About Me</h1>
      <p className='lg:text-left md:text-center text-xl text-white'>
        I am a passionate software engineer with a deep love for programming languages and their applications. I have recently graduated from a prestigious university with a degree in Computer Science and Engineering. My goal is to contribute to the field by developing innovative solutions for various industries.
      </p>
      <div className="p-2 border-[0.5px] border-orange px-4 mt-10 transition-all duration-500 hover:bg-orange cursor-pointer  rounded-r-full rounded-l-full flex items-center justify-center max-w-fit text-white ">
      <button className=''>My projects</button>
      </div>
      
    </div>
  )
}

export default AboutText
