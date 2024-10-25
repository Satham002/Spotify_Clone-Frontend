import React, { useContext } from 'react'
import { assets } from '../assets/frontend-assets/assets'
import { useNavigate } from 'react-router-dom'
import { PlayerContext } from '../Context/PlayerContext'

const Navbar = () => {
    const navigate = useNavigate();
    const { setShowLogin, userData, setUserData } = useContext(PlayerContext)
    return (
        <>
            <div className='w-full flex justify-between items-center font-semibold'>
                <div className='flex items-center gap-2'>
                    <img onClick={() => navigate(-1)} src={assets.arrow_left} className="w-8 bg-black p-2 rounded-2xl cursor-pointer" alt="" />
                    <img onClick={() => navigate(1)} src={assets.arrow_right} className="w-8 bg-black p-2 rounded-2xl cursor-pointer" alt="" />
                </div>
                <div className='flex items-center gap-4'>
                    <p className='bg-white text-black rounded-2xl text-[15px] px-4 py-1 hidden md:block cursor-pointer'>Explore Premium</p>
                    <p className='bg-black cursor-pointer px-4 py-1 rounded-2xl text-[15px]'>Install App</p>
                    {userData ?
                        <p className='bg-purple-900 text-white px-3 py-1 rounded-full flex items-center justify-center cursor-pointer hover:bg-black hover:text-white font-bold' onClick={() => setUserData()}>{userData.username[0].toUpperCase()}</p> 
                        :
                        <p className='bg-white text-black px-4 py-1 rounded-full flex items-center justify-center cursor-pointer hover:bg-black hover:text-white' onClick={() => setShowLogin(true)}>Login</p>}
                </div>
            </div>
            <div className='flex items-center gap-2 mt-4'>
                <p className='bg-white text-black px-4 py-1 rounded-2xl cursor-pointer'>All</p>
                <p className='bg-black text-white px-4 py-1 rounded-2xl cursor-pointer'>Music</p>
                <p className='bg-black text-white px-4 py-1 rounded-2xl cursor-pointer'>Podcasts</p>
            </div>
        </>

    )
}

export default Navbar
