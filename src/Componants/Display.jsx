import React, { useContext, useEffect, useRef } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import DisplayHome from './DisplayHome'
import DisplayAlbam from './DisplayAlbam'
import { PlayerContext } from '../Context/PlayerContext'

const Display = () => {
    const { albumsData } = useContext(PlayerContext)
    const displayRef = useRef();
    const location = useLocation();
    const isAlbam = location.pathname.includes("albam");
    const albamId = isAlbam ? location.pathname.split('/').pop() : "";
    console.log(albamId)
    const bgColour = isAlbam && albumsData.length > 0 ? albumsData.find((x) => (x._id == albamId)).bgColor : "#121212";
    useEffect(() => {
        if (isAlbam) {
            displayRef.current.style.background = `linear-gradient(${bgColour}, #121212)`
        }
        else {
            displayRef.current.style.background = `#121212`
        }
    })
    return (
        <div ref={displayRef} className='w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0'>
            {albumsData.length > 0 ?
                <Routes>
                    <Route path='/' element={<DisplayHome />} />
                    <Route path='/albam/:id' element={<DisplayAlbam album={albumsData.find((x) => (x._id == albamId))} />} />
                </Routes>
                : null}

        </div>
    )
}

export default Display
