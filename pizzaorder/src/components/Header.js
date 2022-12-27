import React from 'react';
import Navbar from './Navbar';
const Header = () => {
  return <div className='banner'>
      <Navbar/>
      <div className="banner__content">
      <div className="container">
          <div className="banner__text">
          <h3>Welcome To Pizza Factory. Order What You Want.</h3>
          <h1> Find Delicious Pizza Here.</h1>
          <p>Pizza is the world’s greatest food. Nothing says “I love you,” “I’m sorry,” or “let’s be friends” better than pizza. It’s a universal love language, and is perfect at any time, for any occasion, especially when you don’t know what to say. From funny pizza quotes to cheesy pizza puns, here are our favorite pizza quotes from pizza lovers around the world, from celebrity Jennifer Lawrence to professional baseball star Yogi Berra.</p>
                 <div className="banner__btn">
                     <div className="btn btn-primary">Delever Now</div>
                 </div>
          </div>
         
      </div>
      </div>
      
  </div>;
};

export default Header;
