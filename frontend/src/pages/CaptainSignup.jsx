import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const CaptainSignup = () => {

    const navigate = useNavigate()

    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ firstName, setFirstName ] = useState('')
    const [ lastName, setLastName ] = useState('')
    const [ userData, setUserData ] = useState({})

    const [ vehicleColor, setVehicleColor ] = useState('')
    const [ vehiclePlate, setVehiclePlate ] = useState('')
    const [ vehicleCapacity, setVehicleCapacity ] = useState('')
    const [ vehicleType, setVehicleType ] = useState('')


    const { captain, setCaptain } = React.useContext(CaptainDataContext)

  
    const submitHandler = async (e) => {
      e.preventDefault()
      const captainData = {
        fullname: {
          firstname: firstName,
          lastname: lastName
        },
        email: email,
        password: password,
        vehicle: {
          color: vehicleColor,
          plate: vehiclePlate,
          capacity: vehicleCapacity,
          vehicleType: vehicleType
        }
      }
  
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData)
  
      if (response.status === 201) {
        const data = response.data
        setCaptain(data.captain)
        localStorage.setItem('token', data.token)
        navigate('/captain-home')
      }
  
      setEmail('')
      setFirstName('')
      setLastName('')
      setPassword('')
      setVehicleColor('')
      setVehiclePlate('')
      setVehicleCapacity('')
      setVehicleType('')
    }

  return (
    <div className='px-5 py-0 h-screen flex flex-col justify-between items-center'>
        <div>
            <img className='w-20 mb-1' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="" srcSet="" />
            <form onSubmit={(e) => {
                submitHandler(e)
                }}>
                
                <h3 className='text-lg mb-1 font-medium'>What's our Captain's name</h3>
                <div className='flex gap-4'>
                <input 
                required
                className='bg-[#eeeeee] mb-5 px-4 py-2 border w-1/2 text-base placeholder:text-base'
                type="text" 
                placeholder='First Name' 
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                />
                <input 
                required
                className='bg-[#eeeeee] mb-5 px-4 py-2 border w-1/2 text-base placeholder:text-base'
                type="text" 
                placeholder='Last Name' 
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                />
                </div>

                <h3 className='text-lg mb-1 font-medium'>What's our Captain's email</h3>
                <input 
                required
                className='bg-[#eeeeee] mb-5 px-4 py-2 border w-full text-base placeholder:text-base'
                type="email" 
                placeholder='example@gmail.com' 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                <h3 className='text-lg mb-1 font-medium'>Enter Password</h3>
                <input 
                required               
                className='bg-[#eeeeee] mb-5 px-4 py-2 border w-full text-lg placeholder:text-base'
                type="password" 
                placeholder='password' 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                <h3 className='text-lg mb-1 font-medium'>Vehicle Information</h3>
                <div className='flex gap-4'>
                  <input 
                    required
                    className='bg-[#eeeeee] mb-5 px-4 py-2 border w-1/2 text-base placeholder:text-base'
                    type="text" 
                    placeholder='Vehicle Color' 
                    value={vehicleColor}
                    onChange={(e) => setVehicleColor(e.target.value)}
                  />
                  <input 
                    required
                    className='bg-[#eeeeee] mb-5 px-4 py-2 border w-1/2 text-base placeholder:text-base'
                    type="text" 
                    placeholder='Vehicle Plate' 
                    value={vehiclePlate}
                    onChange={(e) => setVehiclePlate(e.target.value)}
                  />
                </div>
                <div className='flex gap-4'>
                  <input 
                    required
                    className='bg-[#eeeeee] mb-5 px-4 py-2 border w-1/2 text-base placeholder:text-base'
                    type="number" 
                    placeholder='Vehicle Capacity' 
                    value={vehicleCapacity}
                    onChange={(e) => setVehicleCapacity(e.target.value)}
                  />
                  <select 
                    required
                    className='bg-[#eeeeee] mb-5 px-4 py-2 border w-1/2 text-base placeholder:text-base'
                    value={vehicleType}
                    onChange={(e) => setVehicleType(e.target.value)}
                  >
                    <option value="" disabled>Select Vehicle Type</option>
                    <option value="car">Car</option>
                    <option value="motorcycle">MotorCycle</option>
                    <option value="auto">Auto</option>
                  </select>
                </div>
                <button className='bg-[#111] text-white font-semibold mb-2 px-4 py-2 w-full text-base rounded placeholder:text-base'>Create Captain Account</button>
            </form>
            <p className='text-center mb-5'>Already have an account? <Link to='/captain-login' className='text-blue-600'>Login here</Link></p>
        </div>
        
        <div>
          <p className='text-[10px] mb-2 leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy
            Policy</span> and <span className='underline'>Terms of Service apply</span>.</p>
        </div>
        
    </div>
  )
}

export default CaptainSignup
