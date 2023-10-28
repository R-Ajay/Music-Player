import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Favourites from "./Favourites";
import Feed from "./Feed";
import Library from "./Library";
import Player from "./Player";
import Trending from "./Trending";

import './Styles/Home.css';
import SideBar from "../Components/SideBar";
import Login from "./Login";
import { useEffect, useState } from "react";
import { setClientToken } from "../Spotify";

const Home = () => {

    const [token, setToken] = useState("");
    useEffect(() => {
        const token =window.localStorage.getItem("token");
        const hash = window.location.hash;
        window.location.hash="";
        if(!token && hash){
            const _token = hash.split("&")[0].split("=")[1];
            window.localStorage.setItem("token", _token);
            setToken(_token);
            setClientToken(_token);
        }else{
            setToken(token);
            setClientToken(token);
        }
        
    }, [])

    return !token ? (
        <Login />
      ) :(
            <Router>
                <div className="main-body">
                    <SideBar />
                    <Routes>
                        <Route path="/" element={<Library />}></Route>
                        <Route path="/feed" element={<Feed />}></Route>
                        <Route path="/trending" element={<Trending />}></Route>
                        <Route path="/player" element={<Player />}></Route>
                        <Route path="/favourites" element={<Favourites />}></Route>
                    </Routes>
                </div>
            </Router>
        )
}

export default Home;