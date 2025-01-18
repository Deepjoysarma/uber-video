import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const ConfirmRidePopUp = (props) => {

    const [ otp, setOtp ] = useState('')

    const submitHander = async (e) => {
        e.preventDefault()
    }

  return (
    <div>
      <h5 
      className='p-1 text-center w-[93%] absolute top-0' 
      onClick={() => {
        props.setRidePopupPanel(false)
      }}
      ><i className='text-3xl text-gray-700 ri-arrow-down-wide-line'></i>
      </h5>
    
        <h3 className='text-2xl font-semibold mb-5'>Confirm this ride to Start</h3>
        <div className='flex items-center justify-between p-3 bg-yellow-500 rounded-lg mt-4'>
            <div className='flex items-center gap-3'>
                <img className='h-12 w-12 rounded-full object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9us0MxB35Wv3z03TJFrxhub-WyxqpBKAsjQ&s" alt="" />
                <h2 className='text-lg font-medium'>{props.ride?.user.fullname.firstname + " " + props.ride?.user.fullname.lastname}</h2>
            </div>
            <h5 className='text-lg font-semibold'>2.2km</h5>
        </div>

        <div className='flex gap-2 justify-between flex-col items-center'>
            
            <div className='w-full mt-5'>
                <div className='flex items-center gap-5 p-3 border-b-2'>
                    <i className='text-lg ri-map-pin-user-fill'></i>
                    <div >
                        <h3 className='text-lg font-medium'>562/11-A</h3>
                        <p className='text-sm -mt-1 text-gray-600'>{props.ride?.pickup}</p>
                    </div>
                </div>
                <div className='flex items-center gap-5 p-3 border-b-2'>
                    <i className='text-lg ri-map-pin-2-fill'></i>
                    <div >
                        <h3 className='text-lg font-medium'>562/11-A</h3>
                        <p className='text-sm -mt-1 text-gray-600'>{props.ride?.destination}</p>
                    </div>
                </div>
                <div className='flex items-center gap-5 p-3'>
                    <i className='text-lg ri-currency-line'></i>
                    <div >
                        <h3 className='text-lg font-medium'>₹{props.ride?.fare}</h3>
                        <p className='text-sm -mt-1 text-gray-600'>Cash cash</p>
                    </div>
                </div>
            </div>

            <div className='mt-6 w-full'>
                <form onSubmit={() => {
                    submitHander(e)
                }}>
                    <input value={otp} onChange={(e) => setOtp(e.target.value)} className='bg-[#eee] mt-3 w-full px-6 py-4 font-mono text-lg rounded-lg' type="text"  placeholder='Enter OTP' />
                    <Link to='/captain-riding' className='w-full mt-5 text-lg flex justify-center bg-green-600 text-white font-semibold p-3 rounded-lg'>Confirm</Link>
                    <button onClick={() => {
                        props.setConfirmRidePopupPanel(false)
                        props.setRidePopupPanel(false)
                    }} 
                    className='w-full mt-1 bg-red-600 text-lg text-white font-semibold p-3 rounded-lg'>Cancel</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default ConfirmRidePopUp
