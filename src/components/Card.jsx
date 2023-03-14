import React, { useState } from "react";
import { motion } from "framer-motion";

const Card = () => {
    const [ sliderValue, setSliderValue] = useState(0)
    const [isToggle, setIsToggle] = useState(false)
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="h-full mx-auto w-full text-center"
    >
    
        Slide to Change <input type="range" min='-100' max='100' 
        value={sliderValue} 
        onChange={ (e) => {setSliderValue(e.target.value) 
            // console.log(sliderValue)
          }}
        className='mx-auto' />

        <br />
        <button className="bg-purple-900 text-white py-2 px-6 rounded-xl my-2" onClick={ () => {
            setIsToggle( preValue => !preValue)
            // console.log(isToggle)
        }}>Change Color</button>
      <div className={`h-[500px] ${isToggle ? "bg-[#FF574C]" : 'bg-purple-500'} w-[500px] text-white rounded-3xl px-10 pt-10 mx-auto my-2`}>
        <motion.h2 animate={{x : sliderValue + "px" }}>Framer Animation Example 1</motion.h2>
        
      </div>
      
      
    </motion.div>
  );
};

export default Card;
