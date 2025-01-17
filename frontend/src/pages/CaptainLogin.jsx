import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { CaptainDataContext } from '../context/CaptainContext'

const CaptainLogin = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  

  const navigate = useNavigate()

  const { captain, setCaptain } = React.useContext(CaptainDataContext)
  
  const submitHandler = async (e) => {
    e.preventDefault();
    const captain = {
      email: email,
      password: password
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, captain)

    if(response.status === 200) {
      const data = response.data
      setCaptain(data.captain)
      localStorage.setItem('token', data.token)
      navigate('/captain-home')
    }

    setEmail('')
    setPassword('')
  }

  return (
    <div className='p-7 h-screen flex flex-col justify-between items-center'>
        <div>
            <img className='w-16 mb-1' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="" srcSet="" />
            <form onSubmit={(e) => {
                submitHandler(e)
            }}>
                <h3 className='text-lg mb-2 font-medium'>What's your email</h3>
                <input 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='bg-[#eeeeee] mb-7 px-4 py-2 border w-full text-lg placeholder:text-base'
                type="email" 
                placeholder='example@gmail.com' 
                />
                <h3 className='text-lg mb-2 font-medium'>Enter Password</h3>
                <input 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='bg-[#eeeeee] mb-7 px-4 py-2 border w-full text-lg placeholder:text-base'
                type="password" 
                placeholder='password' 
                />
                <button className='bg-[#111] text-white font-semibold mb-3 px-4 py-2 w-full text-lg rounded placeholder:text-base'>Login</button>
            </form>
            <p className='text-center'>Join a fleet? <Link to='/captain-signup' className='text-blue-600'>Register as a Captain</Link></p>
        </div>
        
        <Link to='/login' className='bg-[#d5622d] flex items-center justify-center mb-5 text-white font-semibold mb-3 px-4 py-2 w-full text-lg placeholder:text-base'>Sign in as User</Link>
        
    </div>
  )
}

export default CaptainLogin
