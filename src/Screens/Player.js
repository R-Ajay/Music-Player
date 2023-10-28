import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import  apiClient  from '../Spotify';
import SongCard from '../Components/SongCard';
import Queue from '../Components/Queue';
import Widgets from '../Components/Widgets';
import "./Styles/Player.css";
import AudioPlayer from "../Components/AudioPlayer";


const Player = () =>{

    const location = useLocation();
    const [tracks, setTracks] =useState([]);
    const [currentTrack, setCurrentTrack] = useState({});
    const [currentIndex, setCurrentIndex] = useState(0);


    useEffect(() =>{
       if(location.state){
         apiClient.get("playlists/" + location.state?.id +"/tracks")
         .then(response => {
            setTracks(response.data.items);
            setCurrentTrack(response.data.items[0].track);
         })
         .catch((err)=>console.log(err));
       }

    } , [location.state])


    useEffect(()=>{
        setCurrentTrack(tracks[currentIndex]?.track);
    }, [currentIndex, tracks])

    return(
        <div className="screen-container flex">
            <div className="left-player-body">
                <AudioPlayer currentTrack={currentTrack?.album} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} total={tracks}/>
                <Widgets artistId={currentTrack?.album?.artists[0]?.id}/>
            </div>
            <div className="right-player-body">
                <SongCard album = {currentTrack?.album} />
                <Queue tracks ={tracks} setCurrentIndex={setCurrentIndex}/>
            </div>
        </div>
    );

}

export default Player;