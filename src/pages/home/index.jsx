// import React from "react";
import Footer from '../../components/footer';
import Header from '../../components/header';
import Hero from '../../components/hero';
import WaveText from '../../components/wavetext';
import CategoryCard from '../../components/categorycard';
import { FaArrowRight } from 'react-icons/fa';
import './index.scss'
import ExploreCard from '../../components/explorecard';

const Home = () => {
  return (
    <>
     <Header />
     <main className="home-main">
       <Hero />
      <section className="category-cards">
          <div className="category-cards--wrapper">
          <CategoryCard 
            title="Earbuds"
            image="https://images.unsplash.com/photo-1637090440273-21d44a54c2dc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            link="/"
            icon={<FaArrowRight />}
          />
          <CategoryCard 
            title="Speakers"
            image="https://images.unsplash.com/photo-1511499271651-073325718d90?q=80&w=2068&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            link="/"
            icon={<FaArrowRight />}
          />
          <CategoryCard 
            title="Earbuds"
            image="https://images.unsplash.com/photo-1606868304424-cbfb9165ffde?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            link="/"
            icon={<FaArrowRight />}
          />
          <CategoryCard 
            title="Phones"
            image="https://images.unsplash.com/photo-1574763788197-1808b6ac8142?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            link="/"
            icon={<FaArrowRight />}
          />
          <CategoryCard 
            title="Accessories"
            image="https://images.unsplash.com/photo-1617043593449-c881f876a4b4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            link="/"
            icon={<FaArrowRight />}
          />
          </div>
      </section>
      <div className="wavetext">
        <div className="wavetext--wrapper">
          <WaveText 
            text="High Quality Products"
          />
        </div>
      </div>
      <section className="explore-cards">
        <div className="explore-cards--wrapper">
        <ExploreCard 
          title="Lightweight luxury earphones"
          image="https://impact-theme-sound.myshopify.com/cdn/shop/files/collection_list_earphones_6c56cc2c-171a-4e86-a967-b59464cc7820.jpg?v=1659615007&width=800"
          link="/"
          icon={<FaArrowRight />}
        />
        <ExploreCard 
          title="Upgrade your listening experience"
          image="https://impact-theme-sound.myshopify.com/cdn/shop/files/collection_list_headphones_b76f953b-698b-4257-9340-82efb5619f36.jpg?v=1659615056&width=800"
          link="/"
          icon={<FaArrowRight />}
        />
        <ExploreCard 
          title="Disover our latest arrivals"
          image="https://impact-theme-sound.myshopify.com/cdn/shop/files/collection_list_leica.jpg?v=1659615075&width=800"
          link="/"
          icon={<FaArrowRight />}
        />
        </div>
      </section>
      <section className="introduce-product">
        <div className="introduce-product--wrapper">
          <h3>
            MW08
          </h3>
          <p className='introduce-product-title'>
            A new dimension of sound & design
          </p>
          <p className="introduce-product-content">
            The MW08 True Wireless Earphones feature custom 11mm Beryllium drivers, 42 hours total playtime, and hybrid active noise-cancellation.
          </p>
          <button>Shop MW08</button>
          <div className="introduce-product--image">
            <img src="https://impact-theme-sound.myshopify.com/cdn/shop/files/MW08SportGR_Generic_IPhone_800x800_800x800_2f8236b1-cb9a-4b4f-8717-9780ee313d4f.png?v=1660209910&width=1600" alt="MW08" />
          </div>
        </div>
      </section>
      <Footer />
     </main>
    </>
  );
};

export default Home;
