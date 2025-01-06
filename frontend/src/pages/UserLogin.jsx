import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserDataContext } from '../context/UserContext'
import axios from 'axios'


const UserLogin = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userData, setUserData] = useState({})

    const { user, setUser } = useContext(UserDataContext)
    const navigate = useNavigate()

    const submitHandler = async(e) => {
        e.preventDefault();
        const userData = {
            email,
            password
        }

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData)

        if(response.status===200){
            const data = response.data
            setUser(data.user);
            localStorage.setItem('token', data.token)
            navigate('/home')
        }


        setEmail('')
        setPassword('')
    }

  return (
    <div className='p-7 h-screen flex flex-col justify-between items-center'>
        <div>
            <img className='w-16 mb-10' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" srcset="" />
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
            <p className='text-center'>New here? <Link to='/signup' className='text-blue-600'>Create new Account</Link></p>
        </div>
        
        <Link to='/captain-login' className='bg-[#10b461] flex items-center justify-center mb-5 text-white font-semibold mb-3 px-4 py-2 w-full text-lg placeholder:text-base'>Sign in as Captain</Link>
        
    </div>
  )
}

export default UserLogin
