import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="leftNav">
        <img
          className="logo"
          width="40"
          height="40"
          src="https://img.icons8.com/ios-filled/50/linkedin.png"
          alt="linkedin"
        />
        <div className="searchBox">
          <button>
            <img
              className="searchIcon"
              width="18"
              height="18"
              src="https://img.icons8.com/ios/50/search--v1.png"
              alt="search--v1"
            />
          </button>
          <input type="text" placeholder="search" />
        </div>
      </div>
      <ul className="rightNav">
            <li>Home</li>
            <li>My Networks</li>
            <li>Jobs</li>
            <li>Messaging</li>
            <li>Notifications</li>
      </ul>
    </nav>
  );
};

export default Navbar;
