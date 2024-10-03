import React from "react";

const Header = () => {
  return (
    <div>
      <header>
        <div className="nav-wrapper">
          <div className="left">Exclusive</div>

          <div className="center">
            <nav>
              <ul>
                <li>Home</li>
                <li>All Products</li>
                <li>Contact Us</li>
                <li>Sign Up</li>
              </ul>
            </nav>
          </div>

          <div className="right">
            <div className="search--input">
              <input type="text" placeholder="What are you looking for?" />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
