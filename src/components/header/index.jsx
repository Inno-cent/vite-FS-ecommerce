import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import { MdSearch } from 'react-icons/md';
import { FaCcApplePay, FaCartArrowDown } from 'react-icons/fa';
import { CgProfile } from "react-icons/cg";

const Header = () => {
  return (
    <div className="header-main">
      <div className="header-wrapper">
      <div className="header-logo">
        <Link to="/">
           <span>
            Storeluxe
           </span>
        </Link>
      </div>
      <div className="header-nav">
        <div className="header-inner-nav">
          <ul className="header-list">
            <li>
              Shop
            </li>
            <li>
              <Link to='/'>
                New Arrivals
              </Link>
            </li>
            <li>
              <Link to='/'>
                Compare
              </Link>
            </li>
            <li>
              <Link to='/'>
                Brands
              </Link>
            </li>
            <li>
              <Link to='/'>
                Blog
              </Link>
            </li>
            <li>
              <Link to='/'>
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="header-right">
        <div className="header-right--wrapper">
          <span>
           <MdSearch style={{width: "100%", height:"100%"}}/>
          </span>
          <span>
          <CgProfile style={{width: "100%", height:"100%"}}/>
          </span>
          <span>
          <FaCartArrowDown style={{width: "100%", height:"100%"}}/>
          </span>
          <span>
          <FaCcApplePay style={{width: "100%", height:"100%", fill:"black"}}/>
          </span>
        </div>
      </div>
      </div>
    </div>
  )
};

export default Header;
