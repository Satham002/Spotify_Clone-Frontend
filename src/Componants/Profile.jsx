import React, { useContext } from 'react'
import { PlayerContext } from '../Context/PlayerContext'


const Profile = () => {
  const { setShowProfile, userData, setUserData } = useContext(PlayerContext)
  return (
    <div>
      <div className='fixed top-16 right-4 z-50'>
        <div className="bg-gray-700 shadow-lg rounded-lg p-4 max-w-xs">
          <p className='mb-3 font-semibold'>Welcome {userData.username.charAt(0).toUpperCase() + userData.username.slice(1)}</p>
          <div className='flex flex-col gap-1 ml-4 mb-2'>
            <p className='cursor-pointer hover:bg-slate-400 p-1 pl-2 rounded-lg'>Account</p>
            <p className='cursor-pointer hover:bg-slate-400 p-1 pl-2 rounded-lg'>Profile</p>
            <p className='cursor-pointer hover:bg-slate-400 p-1 pl-2 rounded-lg'>Upgrade to Premium</p>
            <p className='cursor-pointer hover:bg-slate-400 p-1 pl-2 rounded-lg'>Settings</p>
          </div>
          <hr />
          <p className='cursor-pointer hover:bg-red-500 py-2 mt-1 rounded-lg text-center font-semibold' onClick={() => { setUserData(''); setShowProfile(false); }}>Log out</p>

        </div>
      </div>
    </div>
  )
}

export default Profile
