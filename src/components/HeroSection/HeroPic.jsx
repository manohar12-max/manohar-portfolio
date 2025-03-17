import React from 'react'
import { PiHexagonThin } from "react-icons/pi";
import { motion } from "framer-motion";
import { fadeIn } from "../../../src/framerMotion/varient";
const HeroPic = () => {
  return (
    <motion.div 
    variants={fadeIn("left",0.2)}
           initial="hidden"
           whileInView="show"
           viewport={{once:false,amount:0}}
    className='h-full flex items-center justify-center'>
     <div className='max-h-[450px] w-auto overflow-hidden clip-hexagon '>
     <img src="/manohar2.jpg" alt="Profile pic" className='max-h-[450px] w-auto scale-116' />
     </div>
      <div className="absolute -z-10 flex justify-center items-center animate-pulse ">
        <PiHexagonThin className=' md:h-[90%] lg:h-[120%] min-h-[600px] w-auto text-cyan blur-md animate-[spin_20s_linear_infinite]' />
      </div>
    </motion.div>
  )
}

export default HeroPic
