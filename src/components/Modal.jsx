import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
const Modal = () => {
  const [isToggle, setIsToggle] = useState(false);
  return (
    <div>
      <button
        className="bg-yellow-400 py-1 px-4 ml-[48%] rounded-lg my-2  hover:bg-yellow-300"
        onClick={() => {
          setIsToggle(true);
        }}
      >
        pop up
      </button>

      <AnimatePresence>{isToggle && (
        <div className="fixed bg-blue-500 h-[500px] w-full">

        <motion.div 
        
        initial={{ opacity : 0, y: 50}}
        animate={{ opacity : 1, y : 0}}
        exit = {{opacity : 0, y : 20}}
        
        
        className=" mx-auto w-[400px] h-[400px] py-4 px-4 bg-[#12181B] rounded-lg text-white my-auto ">
          <div  className=" opacity-100 flex justify-between ">
            <p>Framer Example 2</p>
            <button
              className="bg-[#22C55E] px-1 rounded-sm "
              onClick={() => {
                setIsToggle(false);
              }}
            >
              {" "}
              esc{" "}
            </button>
          </div>
          <input type="text" placeholder="email" />
          <button className="bg-yellow-400 text-black px-4 mx-2 my-2  hover:bg-yellow-300">
            Sign up
          </button>
        </motion.div>
        
        </div>
      )}

      </AnimatePresence>

      

      <div className="bg-yellow-400 w-[90%] mt-5 mx-auto h-[400px]">
        {" "}
        Hero Section
      </div>
    </div>
  );
};

export default Modal;
