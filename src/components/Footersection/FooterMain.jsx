import React from 'react'

const FooterMain = () => {
  return (
    <div id="projects" className=' mt-[100px] mb-4'>
      <div className="w-full bg-light-grey h-[1px]"></div>
      <div className="flex md:justify-between px-4 mx-auto mt-2 sm:justify-center">
        <h2 className='text-3xl text-light-grey md:block sm:hidden'>Manohar Dhumal</h2>
        <ul className='flex flex-row gap-3 text-lg text-light-grey '>
            <li><a href="#about">About Me</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
        </ul>
      </div>
      <div className="text-light-grey text-sm flex md:justify-end sm:justify-center pr-4">
      &copy; 2025 Manohar 
      |
      All Rights Reserved
      </div>
    </div>
  )
}

export default FooterMain
