import { IconContext } from 'react-icons';
import { Link, useLocation } from 'react-router-dom';
import './Styles/SideBarButton.css';

const SideBarButton = ({ title, to, icon }) => {

    const location = useLocation();
    const isActive = location.pathname===to;
    const btnCLass = isActive ? "btn-body active" : "btn-body";
    return (
        <Link to={to}>
            <div className={btnCLass}>
                <IconContext.Provider value={{size:"24px", className :"btn-icon"}}>
                    {icon}
                    <p className='btn-title'>{title}</p>
                </IconContext.Provider>
            </div>

        </Link>

    );

}

export default SideBarButton;