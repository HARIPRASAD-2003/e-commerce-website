import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import './Home.css'; // Import your CSS file for styling
import prd1 from '../../assets/png/logo-white.png';
import prd2 from '../../assets/png/logo-black.png';
import prd3 from '../../assets/png/logo-color.png';
import Card from '../../Components/Card/Card';
import Slider from '../../Components/Slider/Slider';
// import { Navigate } from 'react-router';

const Home = () => {
  const navigate = useNavigate();
  // const [prd_vis, set_vis] = useState(false);
  const featuredProducts = [
    {
      id: 1,
      image: prd1,
      title: 'Product 1',
      price: '$99.99',
    },
    {
      id: 2,
      image: prd2,
      title: 'Product 2',
      price: '$49.99',
    },
    {
      id: 3,
      image: prd3,
      title: 'Product 3',
      price: '$79.99',
    },
    {
      id: 4,
      image: prd1,
      title: 'Product 4',
      price: '$129.99',
    },
    {
      id: 5,
      image: prd2,
      title: 'Product 5',
      price: '$89.99',
    },
    {
      id: 6,
      image: prd3,
      title: 'Product 6',
      price: '$69.99',
    },
    {
      id: 7,
      image: prd1,
      title: 'Product 7',
      price: '$99.99',
    },
    {
      id: 8,
      image: prd2,
      title: 'Product 8',
      price: '$99.99',
    },
    {
      id: 9,
      image: prd3,
      title: 'Product 9',
      price: '$99.99',
    },
    // Add more products if needed
  ];

  const [currentProductIndex, setCurrentProductIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProductIndex((prevIndex) => (prevIndex + 1) % featuredProducts.length);
    }, 5000); // Change the delay time as needed (in milliseconds)

    return () => clearInterval(interval);
  }, [featuredProducts.length]);

  const goToPreviousProduct = () => {
    setCurrentProductIndex((prevIndex) => (prevIndex - 1 + featuredProducts.length) % featuredProducts.length);
  };

  const goToNextProduct = () => {
    setCurrentProductIndex((prevIndex) => (prevIndex + 1) % featuredProducts.length);
  };

  return (
    <div>
      <Slider />
      <section className="featured-products">
        {/* Left arrow */}
        <div className='fp'>

          <button type ='button' className="arrow left-arrow" onClick={goToPreviousProduct}>&#9665;</button>

          <button type = 'button' className="arrow right-arrow" onClick={goToNextProduct}>&#9655;</button>
          {/* Display one featured product at a time with background images */}
          {featuredProducts.map((product, index) => (
            <div
              key={product.id}
              className={`product ${index === currentProductIndex ? 'visible' : ''}`}
              style={{ backgroundImage: `url(${product.image})` }}
            >
              <div className={`product-details`}>
                <h3>{product.title}</h3>
                <p>{product.price}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="dot-presentation">
          {featuredProducts.map((_, index) => (
            <div
              key={index}
              className={`dot ${index === currentProductIndex ? 'active-dot' : ''}`}
              onClick={() => setCurrentProductIndex(index)}
            ></div>
          ))}
        </div>

      </section>
      <section className='rp'>
          <h3>Recommended for You</h3>
          <div className='recommended-products'>
            <div className='rec-prd'> 
              {featuredProducts.map((prd, ind) => (
                <div onClick={() => navigate(`/product/:${prd.id}`)} key={ind}>
                  <Card product={prd} />
                </div>
              ))}
            </div>
          </div>
      </section>
      <section className='rp'>
          <h3>Recommended for You</h3>
          <div className='recommended-products'>
            <div className='rec-prd'> 
              {featuredProducts.map((prd, ind) => (
                <div onClick={() => navigate(`/product/:${prd.id}`)} key={ind}>
                  <Card product={prd} />
                </div>
              ))}
            </div>
          </div>
      </section>
      <section className='rp'>
          <h3>Recommended for You</h3>
          <div className='recommended-products'>
            <div className='rec-prd'> 
              {featuredProducts.map((prd, ind) => (
                <div onClick={() => navigate(`/product/:${prd.id}`)} key={ind}>
                  <Card product={prd} />
                </div>
              ))}
            </div>
          </div>
      </section>
      <section className='rp'>
          <h3>Recommended for You</h3>
          <div className='recommended-products'>
            <div className='rec-prd'> 
              {featuredProducts.map((prd, ind) => (
                <div onClick={() => navigate(`/product/:${prd.id}`)} key={ind}>
                  <Card product={prd} />
                </div>
              ))}
            </div>
          </div>
      </section>
      <section className='rp'>
          <h3>Recommended for You</h3>
          <div className='recommended-products'>
            <div className='rec-prd'> 
              {featuredProducts.map((prd, ind) => (
                <div onClick={() => navigate(`/product/:${prd.id}`)} key={ind}>
                  <Card product={prd} />
                </div>
              ))}
            </div>
          </div>
      </section>
      <section className='rp'>
          <h3>Recommended for You</h3>
          <div className='recommended-products'>
            <div className='rec-prd'> 
              {featuredProducts.map((prd, ind) => (
                <div onClick={() => navigate(`/product/:${prd.id}`)} key={ind}>
                  <Card product={prd} />
                </div>
              ))}
            </div>
          </div>
      </section>
    </div>
  );
};

export default Home;
