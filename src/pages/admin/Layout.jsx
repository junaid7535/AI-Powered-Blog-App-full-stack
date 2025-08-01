import React from 'react'
import { assets } from '../../assets/assets'
import { Outlet, useNavigate } from 'react-router-dom'
import Side from '../../components/admin/Side';

const Layout = () => {

    const navigate = useNavigate();
    const logout = () => {
        navigate('/')
    }

  return (
    <>
    <div className='flex items-center justify-between py-2 h-[70px] px-4 sm:px-12 border-b border-gray-200'>
        <img src={assets.logo} className='w-32 sm:w-40 cursor-pointer' 
        onClick={()=>navigate('/')} alt="" />

        <button onClick={logout} className='text-sm px-8 py-2 bg-blue-300 text
        text-white rounded-full cursor-pointer'>Logout</button>
    </div>


    <div className='flex h-[calc(100vh-70px)]'>
        <Side></Side>
        <Outlet></Outlet>
    </div>
    </>
  )
}

export default Layout
