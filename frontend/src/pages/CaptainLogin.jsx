import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const CaptainLogin = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [captainData, setCaptainData] = useState({})
  
  const submitHandler = (e) => {
    e.preventDefault();
    setCaptainData({
      email: email,
      password: password
    })
    console.log(captainData)
    setEmail('')
    setPassword('')
  }

  return (
    <div className='p-7 h-screen flex flex-col justify-between items-center'>
        <div>
            <img className='w-16 mb-1' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="" srcset="" />
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
                <button className='bg-[#111] text-white font-semibold mb-3 px-4 py-2 w-full text-lg placeholder:text-base'>Login</button>
            </form>
            <p className='text-center'>Join a fleet? <Link to='/captain-signup' className='text-blue-600'>Register as a Captain</Link></p>
        </div>
        
        <Link to='/login' className='bg-[#d5622d] flex items-center justify-center mb-5 text-white font-semibold mb-3 px-4 py-2 w-full text-lg placeholder:text-base'>Sign in as User</Link>
        
    </div>
  )
}

export default CaptainLogin
