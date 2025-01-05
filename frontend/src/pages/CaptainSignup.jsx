import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const CaptainSignup = () => {
  const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ firstName, setFirstName ] = useState('')
    const [ lastName, setLastName ] = useState('')
    const [ userData, setUserData ] = useState({})
  
    const submitHandler = (e) => {
      e.preventDefault();
      setUserData({
        username:{
          firstName: firstName,
          lastName: lastName
        },
        email: email,
        password: password
      })
  
      setEmail('')
      setPassword('')
      setFirstName('')
      setLastName('')
    }

  return (
    <div className='p-7 h-screen flex flex-col justify-between items-center'>
        <div>
            <img className='w-16 mb-1' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="" srcset="" />
            <form onSubmit={(e) => {
                submitHandler(e)
                }}>
                
                <h3 className='text-lg mb-2 font-medium'>What's your name</h3>
                <div className='flex gap-4'>
                <input 
                required
                className='bg-[#eeeeee] mb-6 px-4 py-2 border w-1/2 text-base placeholder:text-base'
                type="text" 
                placeholder='First Name' 
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                />
                <input 
                required
                className='bg-[#eeeeee] mb-6 px-4 py-2 border w-1/2 text-base placeholder:text-base'
                type="text" 
                placeholder='Last Name' 
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                />
                </div>

                <h3 className='text-lg mb-2 font-medium'>What's your email</h3>
                <input 
                required
                className='bg-[#eeeeee] mb-6 px-4 py-2 border w-full text-base placeholder:text-base'
                type="email" 
                placeholder='example@gmail.com' 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                <h3 className='text-lg mb-2 font-medium'>Enter Password</h3>
                <input 
                required               
                className='bg-[#eeeeee] mb-6 px-4 py-2 border w-full text-lg placeholder:text-base'
                type="password" 
                placeholder='password' 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                <button className='bg-[#111] text-white font-semibold mb-3 px-4 py-2 w-full text-base placeholder:text-base'>Register</button>
            </form>
            <p className='text-center'>Already have an account? <Link to='/captain-login' className='text-blue-600'>Login here</Link></p>
        </div>
        
        <div>
          <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy
            Policy</span> and <span className='underline'>Terms of Service apply</span>.</p>
        </div>
        
    </div>
  )
}

export default CaptainSignup
