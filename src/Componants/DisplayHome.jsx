import React, { useContext } from 'react'
import Navbar from './Navbar'
import AlbamItem from './AlbamItem'
import SongItem from './SongItem'
import { PlayerContext } from '../Context/PlayerContext'

const DisplayHome = () => {

const {songsData, albumsData} = useContext(PlayerContext)

    return (
        <>
            <Navbar />
            <div className='mb-4'>
                <h1 className='my-5 font-bold text-2xl'>Featured Charts</h1>
                <div className='flex overflow-auto'>
                {albumsData.map((item, index)=>(<AlbamItem key={index} name={item.name} desc={item.desc} image={item.image} id={item._id} />))}
                </div>   
            </div>
            <div className='mb-4'>
                <h1 className='my-5 font-bold text-2xl'>Today's Biggest Hits</h1>
                <div className='flex overflow-auto'>
                {songsData.map((item, index)=>(<SongItem key={index} name={item.name} desc={item.desc} image={item.image} id={item._id} />))}
                </div>   
            </div>
        </>
    )
}

export default DisplayHome
