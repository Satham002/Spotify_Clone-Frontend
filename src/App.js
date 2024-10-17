import React, { useContext } from 'react'
import Sidebar from './Componants/Sidebar'
import Player from './Componants/Player'
import Display from './Componants/Display'
import { PlayerContext } from './Context/PlayerContext'

// albumsData
const App = () => {
  const { audioRef, track, songsData } = useContext(PlayerContext);
  return (
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
  )
}

export default App
