import React from "react";

const Header = () => {
  return (
    <div>
      <header>
        <div className="header--inner">
          <div className="edw34rf">
            <div className="vner234f">
              <div className="toolbar__text">
                <div className="toolbar__text__frame">
                  <div className="vgsdfe">
                    <div className="announcement__text">
                      <div className="ter234">
                        <a href="/" className="navlink ">
                          Theme Features
                        </a>
                        <a href="/" className="navlink ">
                          Blog
                        </a>
                        <a href="/" className="navlink ">
                          FAQ
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-md p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Hamburger Icon (Visible on mobile) */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(true)} className="text-gray-800">
            {/* Hamburger Icon (SVG) */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Center: Logo */}
        <div className="text-center">
          <a href="#" className="text-xl font-bold text-gray-800">Logo</a>
        </div>

        {/* Right Side: Profile, Search, Cart Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="#" className="text-gray-800">
            {/* Profile Icon (SVG) */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 14.4c-2.7 0-5.2 1.3-6.7 3.4a1.4 1.4 0 001.2 2h11a1.4 1.4 0 001.2-2c-1.5-2.1-4-3.4-6.7-3.4zM12 12a4 4 0 100-8 4 4 0 000 8z"
              />
            </svg>
          </a>
          <a href="#" className="text-gray-800">
            {/* Search Icon (SVG) */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </a>
          <a href="#" className="text-gray-800">
            {/* Cart Icon (SVG) */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5 6H2M7 13l1.1 5.6a2 2 0 002 1.4h5.8a2 2 0 002-1.4L17 13M10 21h4M6 21h2"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* Full-screen Menu (Visible on small screens) */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-4 right-4 text-gray-800"
          >
            {/* X Icon (Close) */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <nav className="space-y-6 text-center">
            <a href="#" className="text-gray-800 text-2xl">Shop</a>
            <a href="#" className="text-gray-800 text-2xl">Featured</a>
            <a href="#" className="text-gray-800 text-2xl">About</a>
          </nav>
        </div>
      )}
    </div>
      </header>
    </div>
  );
};

export default Header;
