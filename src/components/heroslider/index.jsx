import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

const HeroSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        {
            image: 'https://images.unsplash.com/photo-1610560661462-f381a11970a0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'High-end Speakers',
            description: 'Experience the best of sound quality',
            buttonlink: '/',
            buttonText: 'Shop Now'
        },
        {
            image: 'https://images.unsplash.com/photo-1635843644763-0e9419bd4ad2?q=80&w=1795&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'iPhones',
            description: 'Get the best of iPhones',
            buttonlink: '/',
            buttonText: 'Shop Now'
        },
        {
            image: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'Quality Earbuds',
            description: "Don't miss out on the best of earbuds",
            buttonlink: '/',
            buttonText: 'Shop Now'
        },
        {
            image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'Introducung M3 Pro',
            description: 'High performance and quality',
            buttonlink: '/',
            buttonText: 'Shop Now'
        },
        {
            image: 'https://images.unsplash.com/photo-1707438095940-1eee18e85400?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'S23 Ultra',
            description: 'Experience the best of Samsung Galaxy',
            buttonlink: '/',
            buttonText: 'Discover More'

        }
    ]
    const totalSlides = slides.length;

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1) % totalSlides);
    }

    const goToSlide = (index) => {
        setCurrentSlide(index);
    }

    useEffect(() => {
        const autoPlay = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(autoPlay);
    });
    return (
        <>
          <div className="hero-card">
            <div className="hero-card--wrapper">
                <div className="image-wrapper">
                    <img src={slides[currentSlide].image}/>
                </div>
                <div className="card-content">
                    <div className="card-content--wrapper">
                        <p>
                            {slides[currentSlide].title}
                        </p>
                        <h1>
                            {slides[currentSlide].description}
                        </h1>
                        <Link to={slides[currentSlide].buttonlink}>
                            <button>
                                {slides[currentSlide].buttonText}
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="slider-control">
                    <div className="slider-control--wrapper">
                       {[...Array(totalSlides)].map((_, index) => (
                                <button 
                                    key={index} 
                                    className={`slider ${currentSlide === index ? 'active' : ''}`}
                                    onClick={() => goToSlide(index)}
                                >
                                    <span>{index + 1}</span>
                                </button>
                            ))}
                    </div>
                </div>
            </div>
          </div>
        </>
    )
}

export default HeroSlider