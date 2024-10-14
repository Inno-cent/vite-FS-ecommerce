import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

const CategoryCard = ({ title, image, link, icon }) => {
    return(
        <div className="category-card">
            <Link to="./" className="category-card-wrapper">
                <div className="category-card--image">
                    <img src={image} alt={title} />
                </div>
                <div className="category-card-text">
                    <p>
                        {title}
                    </p>
                    <span>
                        {icon}
                    </span>
                </div>
            </Link>
        </div>
    )
}

export default CategoryCard;