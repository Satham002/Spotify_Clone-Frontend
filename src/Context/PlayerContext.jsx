import { createContext, useEffect, useRef, useState } from "react";
import axios from 'axios'

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {

    const audioRef = useRef();
    const seekbg = useRef();
    const seekBar = useRef();
    const url = 'https://spotify-backend-irv1.onrender.com'

    const [songsData, setSongsData] = useState([]);
    const [albumsData, setalbumsData] = useState([])
    const [track, setTrack] = useState(songsData[0]);
    const [playStatus, setPlayStatus] = useState(false);
    const [showLogin, setShowLogin] = useState(false)
    const [time, setTime] = useState({
        currentTime: {
            secound: 0,
            minute: 0
        },
        totalTime: {
            secound: 0,
            minute: 0
        }
    })
    const play = () => {
        audioRef.current.play();
        setPlayStatus(true);
    }
    const pause = () => {
        audioRef.current.pause();
        setPlayStatus(false);
    }
    const playWidthId = async (id) => {
        await songsData.map((item) => {
            if (id === item._id) {
                setTrack(item)
            }
        })
        await audioRef.current.play();
        setPlayStatus(true);
    }
    const previous = async () => {
        songsData.map(async (item, index) => {
            if (track._id === item._id && index > 0) {
                await setTrack(songsData[index - 1])
                await audioRef.current.play();
                setPlayStatus(true);
            }
        })
    }
    const next = async () => {
        songsData.map(async (item, index) => {
            if (track._id === item._id && index < songsData.length) {
                await setTrack(songsData[index + 1])
                await audioRef.current.play();
                setPlayStatus(true);
            }
        })
    }

    const getSongsData = async () => {
        try {
            const responce = await axios.get(`${url}/api/song/list`)
            setSongsData(responce.data.message)
            // console.log("Song data")
            // console.log(responce.data.message)
            setTrack(responce.data.message[0])
        } catch (error) {
            // console.log("Song Fetching issue")
        }
    }

    const getAlbumsData = async () => {
        try {
            const responce = await axios.get(`${url}/api/Albam/list`)
            setalbumsData(responce.data.message)
            // console.log("Album data")
            // console.log(responce.data.message)
        } catch (error) {
            // console.log("Album Fetching issue")
        }
    }

    const seeksong = async (e) => {
        audioRef.current.currentTime = ((e.nativeEvent.offsetX / seekbg.current.offsetWidth) * audioRef.current.duration);
    }
    useEffect(() => {
        setTimeout(() => {
            audioRef.current.ontimeupdate = () => {
                seekBar.current.style.width = Math.floor(audioRef.current.currentTime / audioRef.current.duration * 100) + "%";
                setTime({
                    currentTime: {
                        secound: Math.floor(audioRef.current.currentTime % 60),
                        minute: Math.floor(audioRef.current.currentTime / 60)
                    },
                    totalTime: {
                        secound: Math.floor(audioRef.current.duration % 60),
                        minute: Math.floor(audioRef.current.duration / 60)
                    }
                })
            }
        }, 1000)
    }, [audioRef])


    useEffect(() => {
        getSongsData();
        getAlbumsData();
    }, [])


    const contextValue = {
        audioRef,
        seekbg,
        seekBar,
        track, setTrack,
        playStatus, setPlayStatus,
        time, setTime,
        play, pause,
        playWidthId, previous, next, seeksong, songsData, albumsData,showLogin, setShowLogin

    }
    return (
        <PlayerContext.Provider value={contextValue}>
            {props.children}
        </PlayerContext.Provider>
    )
}

export default PlayerContextProvider;
