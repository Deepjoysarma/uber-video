import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const FinishRide = (props) => {

    const navigate = useNavigate()


    async function endRide() {
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/rides/end-ride`, {

            rideId: props.ride._id,
            captain: props.captain


        }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })

        if (response.status === 200) {
            navigate('/captain-home')
        }

    }


  return (
    <div >
      <h5 
      className='p-1 text-center w-[93%] absolute top-0' 
      onClick={() => {
        props.setFinishRidePanel(false)
      }}
      ><i className='text-3xl text-gray-700 ri-arrow-down-wide-line'></i>
      </h5>
    
        <h3 className='text-2xl font-semibold mb-5'>Finish this Ride</h3>
        <div className='flex items-center justify-between p-4 border-2 border-yellow-500 rounded-lg mt-4'>
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
              <button onClick={endRide} className='w-full mt-5 flex text-lg justify-center bg-green-600 text-white font-semibold p-3 rounded-lg'>Finish Ride</button>
              <p className='text-red-500 mt-10 text-xs'>Click on finish ride button if u have completed with the payment.</p>
            </div>
        </div>
    </div>
  )
}

export default FinishRide
