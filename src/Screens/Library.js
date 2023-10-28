import { useEffect, useState } from "react";
import { IconContext } from "react-icons";
import { AiFillPlayCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import apiClient from "../Spotify";

import './Styles/Library.css';

const Library = () =>{

    const[playlists, setPlaylists] = useState(null);

    useEffect(()=>{
        apiClient.get("me/playlists").then(response =>{
            console.log(response.data.items);
            setPlaylists(response.data.items)
        })
    }, []);

    const navigate = useNavigate();
    const playPlayList = (id) =>{
      navigate('/player' , {state: {id : id}})
    }
    return(
        <div className="screen-container">
           <div className="library-body">
              {playlists!=null ? playlists.map(playlist =>
              
               <div className="playlist-card" key={playlist.id} onClick={()=> playPlayList(playlist.id)}>
                  <img 
                  src={playlist.images[0]!==undefined ? playlist.images[0].url 
                    : "https://images.ctfassets.net/bdyhigkzupmv/6lySzcy7qcIN1tf81Qkus/5b5ac73daeaf61f9057c0b0dd8447a31/hero-guitar-outro.jpg"}
                  className="playlist-image" alt="Playlist-Art"/> 
                  <p className="playlist-title">{playlist.name}</p>
                  <p className="playlist-subtitle">{playlist.tracks.total} Songs</p>
                  <div className="playlist-fade">
                    <IconContext.Provider value={{size : "50px", color: "#E99072"}} >
                       <AiFillPlayCircle />
                    </IconContext.Provider>
                  </div>
               </div>
              ) : 
               <h2>Oops! you don't have a playlist</h2>}
           </div>
        </div>
    );

}

export default Library;