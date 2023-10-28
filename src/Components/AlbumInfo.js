import './Styles/AlbumInfo.css';

const AlbumInfo = ({album}) =>{
 
 const artists=[];
 album?.artists?.forEach(element => {
    artists.push(element.name);
 });
    return(
        <div className='albumInfo-card'>
            <div className='albumName-container'>
               <div className='marquee'>
                 <p>{album?.name}</p>
               </div>
            </div>
            <div className='album-info'>
               <p> {`${artists?.join(", ")}`}</p>
            </div>
            <div className='album-release'>
              <p>Release Date : {album?.release_date}</p>
            </div>
        </div>
    );

}

export default AlbumInfo;