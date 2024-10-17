import React, { useContext, useState } from 'react'
import Sidebar from './Componants/Sidebar'
import Player from './Componants/Player'
import Display from './Componants/Display'
import { PlayerContext } from './Context/PlayerContext'
import Login from './Componants/Login'

// albumsData
const App = () => {

  const { audioRef, track, songsData, showLogin} = useContext(PlayerContext);
  
  return (
    <>
      {showLogin ? <Login />:<></>}
      <div className='h-screen bg-black'>
        {songsData.length !== 0
          ?
          <>
            <div className='h-[90%] flex'>
              <Sidebar />
              <Display />
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
