import React from 'react'

const HeadList = () => {
  return (
    <div className="flex flex-col gap-3 p-4">
       <div className="bg-gradient-to-b from-yellow-300 to-white-300  relative rounded-xl shadow-lg  h-screen border p-8 md:h-screen overflow-x-hidden">
        <h2 className="md:text-9xl text-6xl justify-center align-center items-center font-bold mb-4 wrap-break-word">Turning Ideas into Interactive Designs.</h2>
        <div className='flex justify-center items-center pt-16'>
          <h4 className="md:text-6xl font-semibold text-3xl wrap-break-word t-50">Transforming concepts into captivating user experiences.</h4>
        </div>
        <div className='flex justify-center items-center pt-16'>
          <button className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-600 hover:bg-gradient-to-br  focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
            Get Started
          </button>
        </div>
      </div>


       <div className="text-center h-70 md:h-96 items-center flex justify-center bg-gradient-to-b from-purple-200 to-gray-100 rounded-xl shadow-lg border p-6">
       <h1 className='md:text-7xl text-5xl font-semibold'>Strive not to be a success,<span className='text-pink-500'>*</span> but rather to be of value.</h1>
      </div>


    <div className='grid grid-cols-2 gap-4'>

      <div className="bg-gradient-to-b from-pink-300 to-white relative rounded-xl shadow-lg border-t md:h-screen h-80 p-1">
        <h2 className="text-2xl font-bold mb-4">Page 1</h2>
      </div>

       <div className="flex justify-center items-center">
        <h1 className='md:text-7xl font-semibold '>Strive not to be a success, but rather to be of value.</h1>
      </div>
   
      

      <div className="flex justify-center items-center">
        <h1 className='md:text-7xl font-semibold '>Strive not to be a success, but rather to be of value.</h1>
      </div>

      <div className="bg-gradient-to-b from-blue-300 to-white relative rounded-xl shadow-lg border p-6 md:h-screen h-80">
        <h2 className="text-2xl font-bold mb-4">Page 2</h2>
      </div>


      
      <div className="bg-gradient-to-b from-purple-300 to-white relative rounded-xl shadow-lg border p-6 md:h-screen h-80">
        <h2 className="text-2xl font-bold mb-4">Page 3</h2>
      </div>

       <div className="flex justify-center items-center">
        <h1 className='md:text-7xl font-semibold '>Strive not to be a success, but rather to be of value.</h1>
      </div>

       <div className="flex justify-center items-center">
        <h1 className='md:text-7xl font-semibold '>Strive not to be a success, but rather to be of value.</h1>
      </div>

      <div className="bg-gradient-to-b from-green-300 to-white relative rounded-xl shadow-lg border p-6 md:h-screen h-80">
        <h2 className="text-2xl font-bold mb-4">Page 4</h2>
      </div>
      
      
    </div>

     <div className="text-center h-70 md:h-96 items-center flex justify-center bg-gradient-to-b from-purple-200 to-gray-100 rounded-xl shadow-lg border p-6">
       <h1 className='md:text-7xl text-5xl font-semibold'>Strive not to be a success,<span className='text-pink-500'>*</span> but rather to be of value.</h1>
      </div>


    <div className="bg-gradient-to-b from-green-300 to-white relative rounded-xl shadow-lg border p-6 md:h-screen h-80">
        <h2 className="text-2xl font-bold mb-4">Page 4</h2>
      </div>


      
    </div>
  )
}

export default HeadList