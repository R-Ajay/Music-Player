import { IconContext } from "react-icons";
import { FiChevronRight } from "react-icons/fi";
import "./Styles/WidgetCard.css";
import WidgetEntry from "./WidgetEntry";
const WidgetCard = ({ title, similar, featured, newRelease }) => {
    console.log(similar);
    return (
        <div className="widgetcard-body">
            <p className="widget-title">{title}</p>
            {
                similar
                    ? similar.map((artist) => (
                        <WidgetEntry
                            title={artist?.name}
                            subtitle={artist?.followers?.total + " Followers"}
                            image={artist?.images[2]?.url}
                        />
                    ))
                    : featured
                        ? featured.map((playlist) => (
                            <WidgetEntry
                                title={playlist?.name}
                                subtitle={playlist?.tracks?.total + " tracks"}
                                image={playlist?.images[0]?.url}
                            />
                        ))
                        : newRelease
                            ? newRelease.map((album) => (
                                <WidgetEntry
                                    title={album?.name}
                                    subtitle={album?.artists[0]?.name}
                                    image={album?.images[2]?.url}
                                />
                            )) : null}
            <div className="widget-fade">
                <div className="fade-button">
                    <IconContext.Provider value={{ size: "24px", color: "#C4D0E3" }}>
                        <FiChevronRight />
                    </IconContext.Provider>
                </div>
            </div>

        </div>
    );

}

export default WidgetCard;