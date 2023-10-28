import SideBarButton from './SideBarButton';

import './Styles/SideBar.css';

import { MdFavorite, MdSpaceDashboard} from 'react-icons/md';
import { FaGripfire, FaPlay, FaSignOutAlt} from 'react-icons/fa';
import { IoLibrary} from 'react-icons/io5';
import { useEffect, useState } from 'react';
import apiClient from '../Spotify';


const SideBar = () => {

    const [image, setImage] = useState("https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80");

    useEffect(()=>{
        apiClient.get("me").then(response =>{
            setImage(response.data.images[0].url);
        })
    } , []);
    return (
        <div className='sidebar-container'>
            <img src={image} className='profile-img'
                alt='Profile'></img>
            <div>
                <SideBarButton title ="Feed" to = "/feed" icon={<MdSpaceDashboard />}/>
                <SideBarButton title ="Trending" to = "/trending" icon={<FaGripfire />} />
                <SideBarButton title ="Player" to = "/player" icon={<FaPlay />}/>
                <SideBarButton title ="Favourites" to = "/favourites" icon={<MdFavorite />}/>
                <SideBarButton title ="Library" to = "/" icon={<IoLibrary />}/>
            </div>
             <SideBarButton title ="Sign Out" to = "" icon={<FaSignOutAlt />}/>
        </div>
    );

}

export default SideBar;