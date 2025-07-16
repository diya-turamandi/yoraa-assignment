import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <div className="logo">
          <img src="/assets/images/Icon (2).png" alt="Yoraa Logo" />
        </div>
        <ul className="menu">
          <li><a href="#">My</a></li>
          <li><a href="#">Men</a></li>
          <li><a href="#">Women</a></li>
          <li><a href="#">Kids</a></li>
          <li><a href="#">Sale</a></li>
          <li><a href="#">New Arrival</a></li>
          <li><a href="#">Trending Now</a></li>
          <img src="/assets/images/User Icon Container (1).png" alt="User" />
        </ul>
      </div>

      <div className="navbar-right">
        <div className="right-links">
          <a href="#">Help</a>
          <a href="#">Join Us</a>
          <a href="#">Sign In</a>
        </div>
        <div className="icons">
          <img src="/assets/images/Button - Search .png" alt="Search" />
          <img src="/assets/images/Link - Favourites .png" alt="Wishlist" />
          <img src="/assets/images/Link - Bag Items_ 0 .png" alt="Cart" />
          <img src="/assets/images/Union .png" alt="Profile" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
