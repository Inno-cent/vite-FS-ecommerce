import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

const ExploreCard = ({ title, image, link, icon }) => {
    return(
        <div className="explore-card">
            <Link to={link} className="explore-card-wrapper">
                <div className="explore-card--image">
                    <img src={image} alt={title} />
                </div>
                <div className="explore-card-text">
                    <span>
                        {icon}
                    </span>
                    <p>
                        {title}
                    </p>
                </div>
            </Link>
        </div>
    )
}

export default ExploreCard;