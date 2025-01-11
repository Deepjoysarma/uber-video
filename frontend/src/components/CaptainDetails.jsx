import React from 'react'

const CaptainDetails = () => {
  return (
    <div>
        <div className='flex items-center justify-between'>
            <div className='flex items-center justify-start gap-3'>
              <img className='h-10 w-10 rounded-full object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvCozcPdX9oEz2WTQxoK9Ea4QXzzLv9WcNUw&s" alt="" />
              <h4 className='text-lg font-medium'>Tarun Roy</h4>
            </div>
            <div>
              <h4 className='text-xl font-semibold'>₹296.30</h4>
              <p className='text-sm font-medium text-gray-600'>Earned</p>
            </div>
        </div>
        <div className='flex mt-6 p-3 bg-gray-100 rounded-xl justify-center gap-5 items-start'>
            <div className='text-center'>
              <i className='text-3xl mb-2 font-thin ri-timer-2-line'></i>
              <h5 className='text-lg font-medium'>10.2</h5>
              <p className='text-small text-gray-600'>Hours Online</p>
            </div>
            <div className='text-center'>
              <i className='text-3xl mb-2 font-thin ri-speed-up-fill'></i>
              <h5 className='text-lg font-medium'>10.2</h5>
              <p className='text-small text-gray-600'>Hours Online</p>
            </div>
            <div className='text-center'>
              <i className='text-3xl mb-2 font-thin ri-booklet-line'></i>
              <h5 className='text-lg font-medium'>10.2</h5>
              <p className='text-small text-gray-600'>Hours Online</p>
            </div>
        </div>
    </div>
  )
}

export default CaptainDetails
