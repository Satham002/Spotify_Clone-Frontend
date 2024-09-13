import React, { useEffect, useRef } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import DisplayHome from './DisplayHome'
import DisplayAlbam from './DisplayAlbam'
import { albumsData } from '../assets/frontend-assets/assets'

const Display = () => {
    const displayRef = useRef();
    const Location = useLocation();
    const isAlbam = Location.pathname.includes("albam");
    const albamID = isAlbam ? Location.pathname.slice(-1) : "";
    const bgColor = albumsData[Number(albamID)].bgColor;
    // console.log(Location.pathname.slice(-1))
    useEffect(() => {
        if (isAlbam) {
            displayRef.current.style.background = `linear-gradient(${bgColor}, #121212)`
            // console.log(displayRef.current);
        }
        else {
            displayRef.current.style.background = `#121212`
        }
    })
    // console.log(bgColor);

    // console.log(Location.pathname.slice(-1));
    return (
        <div ref={displayRef} className='w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0'>
            <Routes>
                <Route path='/Spotify_Clone-Frontend' element={<DisplayHome />} />
                <Route path='/albam/:id' element={<DisplayAlbam />} />
            </Routes>
        </div>
    )
}

export default Display
