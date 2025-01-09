import React from 'react'

const Home = () => {
  return (
    <div className='h-screen relative'>
      <img className='w-16 absolute left-5 top-5' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
      <div className='h-screen w-screen'>
        {/* image for temporary */}
        <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
      </div>
      <div className='flex flex-col justify-end h-screen absolute top-0 w-full'>
        <div className='h-[30%] p-5 bg-white'>
          <h4 className='text-2xl font-semibold'>Find a trip</h4>
          <form>
            <input className='bg-[#eee] mt-5 w-full px-12 py-2 text-base rounded-lg' type="text" placeholder='Add a pick-up location' />
            <input className='bg-[#eee] mt-3 w-full px-12 py-2 text-base rounded-lg' type="text" placeholder='Enter your destination' />
          </form>
        </div>
        <div className='bg-red-500 h-0'>

        </div>
      </div>
    </div>
  )
}

export default Home