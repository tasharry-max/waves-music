import React, {useRef, useState} from "react";
import "./styles/app.scss";
import Song from "./components/Song";
import Player from "./components/Player";
import Library from "./components/Library";
import Nav from "./components/Nav";
//import util
import chillpop from "./data";
import {playAudio} from "./util";

function App() {
  const [songs, setSongs] = useState(chillpop());
  const [currentSong, setCurrentSong] = useState(songs[0])
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0
})
const [libraryStatus, setLibraryStatus] = useState(false);
const audioRef = useRef(null);
const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({...songInfo, currentTime: current, duration:duration})
}
  return (
    <div className="App">
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus}/>
      <Song currentSong={currentSong}/>
      <Player
        audioRef={audioRef}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        songInfo={songInfo}
        setSongInfo={setSongInfo}
        songs={songs}
        setSongs={setSongs}
      />
       <Library 
       audioRef={audioRef} 
       songs={songs} 
       setCurrentSong={setCurrentSong} 
       isPlaying={isPlaying} 
       setSongs={setSongs} 
       libraryStatus={libraryStatus}
       />
       <audio 
       onLoadedMetadata={timeUpdateHandler}  
       onTimeUpdate={timeUpdateHandler}
       ref={audioRef} 
       src={currentSong.audio}>
       </audio>
    </div>
  );
}

export default App;

