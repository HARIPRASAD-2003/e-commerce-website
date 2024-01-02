import React from 'react'
import { useNavigate } from 'react-router';
import Card from '../../Components/Card/Card';
import prd1 from '../../assets/png/logo-white.png';
import prd2 from '../../assets/png/logo-black.png';
import prd3 from '../../assets/png/logo-color.png';
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
const Products = () => {
    const navigate = useNavigate();
  return (
    <section className='rp'>
          <h3>Mobiles</h3>
          <div className='recommended-products'>
            <div className='rec-prd'> 
              {featuredProducts.map((prd, ind) => (
                <div onClick={() => navigate(`/product/:${prd.id}`)} key={ind}>
                  <Card product={prd} />
                </div>
              ))}
            </div>
          </div>
          <section className='rp'>
          <h3>Electronics</h3>
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
          <h3>Home Accessories</h3>
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
          <h3>Furnitures</h3>
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
          <h3>Electricals</h3>
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
          <h3>TV and Home Speakers</h3>
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
      </section>
      
  )
}

export default Products