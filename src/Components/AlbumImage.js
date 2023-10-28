import './Styles/AlbumImage.css';
const AlbumImage = ({ url }) => {

    return (
        <div>
            <div className='albumImage flex'>
                <img src={url} alt="album art" className="albumImage-art" />
                <div className='albumImage-shadow'>
                    <img src={url} alt="shadow" className="albumImage-shadow" />
                </div>
            </div>


        </div>
    );

}

export default AlbumImage;