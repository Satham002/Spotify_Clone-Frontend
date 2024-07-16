import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/frontend-assets/assets";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {

    const audioRef = useRef();
    const seekbg = useRef();
    const seekBar = useRef();

    const [track, setTrack] = useState(songsData[0]);
    const [playStatus, setPlayStatus] = useState(false);
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
        await setTrack(songsData[id]);
        await audioRef.current.play();
        setPlayStatus(true);
    }
    const previous = async () => {
        if (track.id > 0) {
            await setTrack(songsData[track.id - 1]);
            await audioRef.current.play();
            setPlayStatus(true);
        }
    }
    const next = async () => {
        if (track.id < songsData.length - 1) {
            await setTrack(songsData[track.id + 1]);
            console.log(songsData[track.id + 1]);
            await audioRef.current.play();
            setPlayStatus(true);
        }
    }
    const seeksong = async (e) => {
        // console.log(e);
        audioRef.current.currentTime=((e.nativeEvent.offsetX/seekbg.current.offsetWidth)*audioRef.current.duration);
    }
    useEffect(() => {
        setTimeout(() => {
            audioRef.current.ontimeupdate = () => {
                seekBar.current.style.width = Math.floor(audioRef.current.currentTime / audioRef.current.duration * 100) + "%";
                // console.log(seekBar.current.style.width);
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

    const contextValue = {
        audioRef,
        seekbg,
        seekBar,
        track, setTrack,
        playStatus, setPlayStatus,
        time, setTime,
        play, pause,
        playWidthId, previous, next, seeksong
    }
    return (
        <PlayerContext.Provider value={contextValue}>
            {props.children}
        </PlayerContext.Provider>
    )
}

export default PlayerContextProvider;