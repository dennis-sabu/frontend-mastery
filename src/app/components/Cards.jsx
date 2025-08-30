import React from 'react'
import {motion }from 'framer-motion'

const HeadList = () => {
  return (
    <div className="flex flex-col gap-3 p-4">

       <motion.div
       initial={{ opacity: 0, x: -100 }}
       animate={{ opacity: 1, x: 0 }}
       transition={{
         type: "spring",
         stiffness: 100,
         duration: 1.8,
         delay: 0.3,
         damping: 25
       }}
       className="bg-gradient-to-b from-yellow-300 to-white-300  relative rounded-xl shadow-lg  h-screen border p-8 md:h-screen overflow-x-hidden ">
        <h2 className="md:text-9xl text-6xl justify-center align-center items-center font-bold mb-4 wrap-break-word">Turning Ideas into Interactive Designs.</h2>
        <div className='flex justify-center items-center pt-16'>
          <h4 className="md:text-6xl font-semibold text-3xl wrap-break-word t-50">Transforming concepts into captivating user experiences.</h4>
        </div>

        <div className='flex justify-center items-center pt-16 z-10'>
          <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            duration: 1.2,
            delay: 0.3,
            damping: 25
          }}
          className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-600 hover:bg-gradient-to-br  focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
            Get Started
          </motion.button>
        </div>
      </motion.div>


       <motion.div 
       initial={{ opacity: 0, y: 100 }}       // Start above
       whileInView={{ opacity: 1, y: 0 }}      // Animate in when in viewport
       exit={{ opacity: 0, y: 100 }}           // Animate out downward
       transition={{ duration: 0.8, type: "spring", stiffness: 50 }}
       viewport={{ once: false, amount: 0.3 }} // Trigger when 30% visible
          
       
       className="text-center h-70  md:h-96 items-center flex justify-center bg-gradient-to-b from-purple-200 to-gray-100 rounded-xl shadow-lg border p-6">
       <h1 className='md:text-7xl text-5xl font-semibold'>Strive not to be a success,<span className='text-pink-500'>*</span> but rather to be of value.</h1>
      </motion.div>


    <div className='grid grid-cols-2 gap-4'>

      <motion.div 
      initial={{ opacity: 0, x: -100 }}       // Start off-screen to the left
  whileInView={{ opacity: 1, x: 0 }}       // Animate when in viewport
  exit={{ opacity: 0, x: 100 }}            // Animate out when leaving (optional)
  transition={{ duration: 1, type: "spring", stiffness: 50 }}
  viewport={{ once: false, amount: 0.3 }} // Trigger when 30% of the element is visible
       className="relative rounded-xl shadow-lg border-t md:h-screen h-80 overflow-hidden group">
        <img src="https://imgs.search.brave.com/qS7668G-DmqI-C7oGZjywZTbLrLrBtPD6AR-SwBoicQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91bml2/ZXJzaWRhZGV1cm9w/ZWEuY29tL3Jlc291/cmNlcy9tZWRpYS9p/bWFnZXMvZXN0aWxv/LWFlc3RoZXRpYy04/MDB4NDUwLndpZHRo/LTY0MC5qcGc"    alt="Description 1" className="w-full h-full object-cover rounded-xl" />
                 <div className="absolute inset-0 bg-purple-400/40  rounded-xl transition-opacity duration-500 group-hover:opacity-0"></div>
      </motion.div>

       <motion.div
        initial={{ opacity: 0, x: 100 }}       // Start off-screen to the right
  whileInView={{ opacity: 1, x: 0 }}       // Animate when in viewport
  exit={{ opacity: 0, x: 100 }}            // Animate out when leaving (optional)
  transition={{ duration: 1.6, type: "spring", stiffness: 50 }}
  viewport={{ once: false, amount: 0.3 }}
       className="flex justify-center items-center">
        <h1 className='md:text-7xl text-4xl font-semibold '>Strive not to be a success, but rather to be of value.</h1>
      </motion.div>
   
      

      <motion.div
       initial={{ opacity: 0, x: -100 }}       // Start off-screen to the left
  whileInView={{ opacity: 1, x: 0 }}       // Animate when in viewport
  exit={{ opacity: 0, x: 100 }}            // Animate out when leaving (optional)
  transition={{ duration: 1.6, type: "spring", stiffness: 50 }}
  viewport={{ once: false, amount: 0.3 }} // Trigger when 30% of the element is visible
      className="flex justify-center items-center">
        <h1 className='md:text-7xl  text-4xl font-semibold '>Strive not to be a success, but rather to be of value.</h1>
      </motion.div>

      <motion.div

       initial={{ opacity: 0, x: 100 }}       // Start off-screen to the right
  whileInView={{ opacity: 1, x: 0 }}       // Animate when in viewport
  exit={{ opacity: 0, x: 100 }}            // Animate out when leaving (optional)
  transition={{ duration: 1.6, type: "spring", stiffness: 50 }}
  viewport={{ once: false, amount: 0.3 }}
       className="relative rounded-xl shadow-lg border-t md:h-screen h-80 overflow-hidden group">
        <img src="https://imgs.search.brave.com/qS7668G-DmqI-C7oGZjywZTbLrLrBtPD6AR-SwBoicQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91bml2/ZXJzaWRhZGV1cm9w/ZWEuY29tL3Jlc291/cmNlcy9tZWRpYS9p/bWFnZXMvZXN0aWxv/LWFlc3RoZXRpYy04/MDB4NDUwLndpZHRo/LTY0MC5qcGc"    alt="Description 1" className="w-full h-full object-cover rounded-xl" />
                 <div className="absolute inset-0 bg-blue-400/40  rounded-xl transition-opacity duration-500 group-hover:opacity-0"></div>
      </motion.div>

      <motion.div 
  
          initial={{ opacity: 0, x: -100 }}       // Start off-screen to the left
  whileInView={{ opacity: 1, x: 0 }}       // Animate when in viewport
  exit={{ opacity: 0, x: 100 }}            // Animate out when leaving (optional)
  transition={{ duration: 1, type: "spring", stiffness: 50 }}
  viewport={{ once: false, amount: 0.3 }} // Trigger when 30% of the element is visible

      className="relative rounded-xl shadow-lg border-t md:h-screen h-80 overflow-hidden group">
        <img src="https://imgs.search.brave.com/qS7668G-DmqI-C7oGZjywZTbLrLrBtPD6AR-SwBoicQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91bml2/ZXJzaWRhZGV1cm9w/ZWEuY29tL3Jlc291/cmNlcy9tZWRpYS9p/bWFnZXMvZXN0aWxv/LWFlc3RoZXRpYy04/MDB4NDUwLndpZHRo/LTY0MC5qcGc"    alt="Description 1" className="w-full h-full object-cover rounded-xl" />
                 <div className="absolute inset-0 bg-yellow-400/40  rounded-xl transition-opacity duration-500 group-hover:opacity-0"></div>
      </motion.div>

       <motion.div

       initial={{ opacity: 0, x: 100 }}       // Start off-screen to the left
  whileInView={{ opacity: 1, x: 0 }}       // Animate when in viewport
  exit={{ opacity: 0, x: 100 }}            // Animate out when leaving (optional)
  transition={{ duration: 1, type: "spring", stiffness: 50 }}
  viewport={{ once: false, amount: 0.3 }} // Trigger when 30% of the element is visible
       className="flex justify-center items-center">
        <h1 className='md:text-7xl text-4xl font-semibold '>Strive not to be a success, but rather to be of value.</h1>
      </motion.div>

       <motion.div
       initial={{ opacity: 0, x: -100 }}       // Start off-screen to the left
  whileInView={{ opacity: 1, x: 0 }}       // Animate when in viewport
  exit={{ opacity: 0, x: 100 }}            // Animate out when leaving (optional)
  transition={{ duration: 1, type: "spring", stiffness: 50 }}
  viewport={{ once: false, amount: 0.3 }} // Trigger when 30% of the element is visible
       
       className="flex justify-center items-center">
        <h1 className='md:text-7xl text-4xl font-semibold '>Strive not to be a success, but rather to be of value.</h1>
      </motion.div>

      <motion.div
      initial={{ opacity: 0, x: 100 }}       // Start off-screen to the left
  whileInView={{ opacity: 1, x: 0 }}       // Animate when in viewport
  exit={{ opacity: 0, x: 100 }}            // Animate out when leaving (optional)
  transition={{ duration: 1, type: "spring", stiffness: 50 }}
  viewport={{ once: false, amount: 0.3 }} // Trigger when 30% of the element is visible
      
      className="relative rounded-xl shadow-lg border-t md:h-screen h-80 overflow-hidden group">
        <img src="https://imgs.search.brave.com/qS7668G-DmqI-C7oGZjywZTbLrLrBtPD6AR-SwBoicQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91bml2/ZXJzaWRhZGV1cm9w/ZWEuY29tL3Jlc291/cmNlcy9tZWRpYS9p/bWFnZXMvZXN0aWxv/LWFlc3RoZXRpYy04/MDB4NDUwLndpZHRo/LTY0MC5qcGc"    alt="Description 1" className="w-full h-full object-cover rounded-xl" />
                 <div className="absolute inset-0 bg-green-200/40  rounded-xl transition-opacity duration-500 group-hover:opacity-0"></div>
      </motion.div>
      
      
    </div>

     <motion.div
     
      initial={{ opacity: 0, y: 100 }}       // Start above
       whileInView={{ opacity: 1, y: 0 }}      // Animate in when in viewport
       exit={{ opacity: 0, y: 100 }}           // Animate out downward
       transition={{ duration: 1, type: "spring", stiffness: 50 }}
       viewport={{ once: false, amount: 0.3 }} // Trigger when 30% visible
     className="text-center h-70 md:h-96 items-center flex justify-center bg-gradient-to-b from-purple-200 to-gray-100 rounded-xl shadow-lg border p-6">
       <h1 className='md:text-7xl text-5xl font-semibold'>Strive not to be a success,<span className='text-pink-500'>*</span> but rather to be of value.</h1>
      </motion.div>


    <div className="bg-gradient-to-b from-green-300 to-white relative rounded-xl shadow-lg border p-6 md:h-screen h-80">
        <h2 className="text-2xl font-bold mb-4">Page 4</h2>
      </div>


      
    </div>
  )
}

export default HeadList