import React, { useContext, useState } from 'react'
import Sidebar from './Componants/Sidebar'
import Player from './Componants/Player'
import Display from './Componants/Display'
import { PlayerContext } from './Context/PlayerContext'
import Login from './Componants/Login'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// albumsData
const App = () => {

  const { audioRef, track, songsData, showLogin } = useContext(PlayerContext);

  return (
    <>
      <ToastContainer />
      {showLogin ? <Login /> : <></>}
      <div className='h-screen bg-black'>
        {songsData.length !== 0
          ?
          <>
            <div className='h-[90%] flex'>
              <Sidebar />
              {songsData ? <Display /> : <div className='grid place-items-center min-h-[80vh]'>
                <div className='w-16 h-16 place-self-center border-4 border-gray-400 border-t-green-800 rounded-full animate-spin'>
                </div>

              </div>}
            </div>
            <Player />
          </> :
          null
        }
        <audio className='fixed bottom-0' ref={audioRef} src={track ? track.file : ""} preload='auto'></audio>
      </div>
    </>
  )
}

export default App
