import React from 'react'

const Newsletter = () => {
  return (
    <div className='flex flex-col items-center justify-center text-center space-y-2 my-32'>
      <h1 className='md:text-4xl text-2xl font-semibold'>Never miss a Blog!</h1>
      <p className='md:text-lg text-gray-500/70 pb-8'>Subscribe to get the latest blog, new tech and exclusive news</p>

      <form action="" className='flex items-center justify-between max-w-2xl w-full md:h-13 h-12'>
        <input className='border border-gray-300 rounded-md h-full border-r-0
        outline-none w-full rounded-r-none px-3 text-gray-500' type="text" name="" id="" placeholder='enter your email id' required />

        <button type='submit' className='md:px-12 px-8 h-full text-white bg-blue-500 hover:bg-primary 
        transition-all cursot-pointer rounded-md rounded-1-none'>Subscribe</button>
      </form>
    </div>
  )
}

export default Newsletter
