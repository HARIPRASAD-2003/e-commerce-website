import React from 'react';
import './About.css'; // Import your CSS file for styling
import logo from '../../logo-color.png';

const About = () => {

  
  return (
    <div className="container">
      <section className="visual-container about-container">
        <div className="about-content">
          <h2>Welcome to TrendHub</h2>
          <p>
            TrendHub, founded by Team Alfred, is your ultimate destination for discovering the latest trends 
            and innovations. Our journey is rooted in a passion for bringing exceptional products to our 
            customers.
          </p>
        </div>
        <div className="about-image">
          <img src={logo} alt="TrendHub Logo" />
        </div>
      </section>

      <section className="visual-container about-section">
        <h2>Our Vision</h2>
        <p>
          At TrendHub, we envision a future where everyone has access to cutting-edge products that 
          redefine their lifestyle. Our vision is to create a platform that not only follows trends but 
          sets them.
        </p>
      </section>

      <section className="visual-container about-section">
        <h2>Curated Excellence</h2>
        <p>
          Our team of experts carefully curates a diverse range of products, ensuring that each item 
          meets our high standards of quality, innovation, and style. From fashion and electronics to 
          home essentials and beyond, TrendHub is where trends come to life.
        </p>
      </section>

      <section className="visual-container about-section">
        <h2>Customer-Centric Experience</h2>
        <p>
          Your satisfaction is our top priority. TrendHub is designed to provide a seamless and enjoyable 
          shopping experience. Our user-friendly platform, secure transactions, and responsive customer 
          support ensure that you have the best possible journey with us.
        </p>
      </section>

      <section className="visual-container about-section">
        <h2>Our Team</h2>
        <p>
          Meet the passionate individuals behind TrendHub. Our diverse team brings a wealth of experience 
          and creativity, working together to shape the future of online retail. We are united by a shared 
          commitment to excellence.
        </p>
      </section>

      <section className="visual-container about-section">
        <h2>Sustainability Matters</h2>
        <p>
          TrendHub is committed to sustainability. We actively seek eco-friendly products and packaging 
          solutions to reduce our environmental footprint. Join us in making a positive impact on the 
          planet while staying trendy.
        </p>
      </section>

      <section className="visual-container about-section">
        <h2>Future Goals</h2>
        <p>
          Our journey doesn't end here. We are constantly evolving, embracing new technologies, and 
          exploring innovative ways to enhance your shopping experience. Stay tuned as we continue to 
          redefine the future of online retail.
        </p>
      </section>

      <section className="visual-container about-section">
        <h2>Join TrendHub Today</h2>
        <p>
          Become a part of the TrendHub community and embark on a journey where style meets innovation. 
          Your support fuels our passion, and together, we'll shape the future of online shopping.
        </p>
      </section>
    </div>
  );
}

export default About;
