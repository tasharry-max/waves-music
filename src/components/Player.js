import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Player = ({currentSong, setCurrentSong, id, isPlaying, setIsPlaying, songInfo, setSongInfo, audioRef, songs, setSongs}) => {
    const getTime = (time) => {
        return (
            Math.floor(time/60) + ":" + ("0" + Math.floor(time%60)).slice(-2)
        )
    }
    const dragHandler = (e) => {
        audioRef.current.currentTime = e.target.value;
        setSongInfo({...songInfo, currentTime: e.target.value})
    }
    const playSongHandler = () => {
        if(isPlaying) {
            audioRef.current.pause();
            setIsPlaying(!isPlaying);
        } else {
            audioRef.current.play(); 
            setIsPlaying(!isPlaying);
        }
    }
    const activeLibrarySong = (nextPrev) => {
        const newSongs = songs.map((song)=> {
            if(song.id === nextPrev.id) { return {...song, active:true}}
            else { return {...song, active:false}}
        })
        setSongs(newSongs);
    }
    const skipTrackHandler = async (direction) => {
        let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
     
        if(direction === "skip-forward") { 
            await setCurrentSong(songs[(currentIndex+1) % songs.length]);
            activeLibrarySong(songs[(currentIndex+1) % songs.length])
        }
        if(direction === "skip-back"){ 
            if((currentIndex-1) % songs.length === -1) {
                await setCurrentSong(songs[songs.length-1]);
                if(isPlaying) {audioRef.current.play()}
                return;
            }
            await setCurrentSong(songs[(currentIndex-1) % songs.length])
        }
        
        if(isPlaying) {audioRef.current.play()}
    }
    const animationPercentage = (songInfo.currentTime / songInfo.duration) * 100;
    return (
        <div className="player">
            <div className="time-control">
                <p>{getTime(songInfo.currentTime)}</p>
                <div style={{background:`linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})`}} className="track">
                    <input type="range" value={songInfo.currentTime} min={0} max={songInfo.duration || 0} onChange={dragHandler}/>
                    <div className="animate-track" style={{transform: `translateX(${animationPercentage}%)`}}></div>
                </div>
                <p>{songInfo.duration ? getTime(songInfo.duration) : "0:00"}</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon onClick={() => skipTrackHandler("skip-back")} className="skip-back" size="2x" icon={faAngleLeft}/>
                <FontAwesomeIcon onClick={playSongHandler} className="play" size="2x" icon={isPlaying ? faPause : faPlay}/>
                <FontAwesomeIcon onClick={() => skipTrackHandler("skip-forward")} className="skip-forward" size="2x" icon={faAngleRight}/>
            </div>
            
        </div>
    )
}

export default Player;