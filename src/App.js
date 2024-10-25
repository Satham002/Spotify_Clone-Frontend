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

  const { audioRef, track, songsData, showLogin} = useContext(PlayerContext);
  
  return (
    <>
    <ToastContainer />
      {showLogin ? <Login />:<></>}
      <div className='h-screen bg-black'>
        {songsData.length !== 0
          ?
          <>
            <div className='h-[90%] flex'>
              <Sidebar />
              {songsData?<Display />:""}
            </div>
            <Player />
          </> :
          null
        }
        <audio ref={audioRef} src={track ? track.file : ""} preload='auto'></audio>
      </div>
    </>
  )
}

export default App
