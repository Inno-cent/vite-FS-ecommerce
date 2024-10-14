import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <>
           <div className="footer">
             <div className="footer-wrapper">
                <div className="footer-top">
                <div className="logo">
                    <h1>
                        Storeluxe
                    </h1>
                </div>
                <div className="footer-links">
                    <ul>
                        <span>
                            Shop
                        </span>
                        <li>
                            <Link to="/">
                                Macs
                            </Link>
                        </li>
                        <li>
                            <Link to="/about">
                                Samsung Galaxy
                            </Link>
                        </li>
                        <li>
                            <Link to="/services">
                                iPhones
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact">
                                iPads
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact">
                                Applecare
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact">
                                Alienware
                            </Link>
                        </li>
                    </ul>
                    <ul>
                        <span>
                            Brands
                        </span>
                        <li>
                            <Link to="/">
                                Apple
                            </Link>
                        </li>
                        <li>
                            <Link to="/about">
                                Samsung
                            </Link>
                        </li>
                        <li>
                            <Link to="/services">
                                JBL
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact">
                                Bose
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact">
                                Beats
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact">
                                Sonos
                            </Link>
                        </li>
                    </ul>
                    <ul>
                        <span>
                            Company
                        </span>
                        <li>
                            <Link to="/">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to="/about">
                                Careers
                            </Link>
                        </li>
                        <li>
                            <Link to="/services">
                                Newsroom
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact">
                                Investor Relations
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact">
                                Events
                            </Link>
                        </li>
                    </ul>
                    <ul>
                        <span>
                            Support
                        </span>
                        <li>
                            <Link to="/">
                                Contact
                            </Link>
                        </li>
                        <li>
                            <Link to="/about">
                                FAQs
                            </Link>
                        </li>
                        <li>
                            <Link to="/services">
                                Order Status
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact">
                                Shopping Help
                            </Link>
                        </li>
                    </ul>
                </div>
                </div>
                <div className="hr"></div>
                <div className="footer-lower">
                    <p>
                        © 2025 Storeluxe. All rights reserved. Powered by NextBuildr
                    </p>
                    <ul className='footer-social'>
                        <li>
                            <Link to="/">
                                <FaFacebook />
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <FaTwitter />
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <FaInstagram />
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <FaLinkedin />
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <FaYoutube />
                            </Link>
                        </li>
                    </ul>
                </div>
             </div>
           </div>
        </>
    )
}
export default Footer;