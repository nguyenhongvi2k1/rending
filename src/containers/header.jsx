import React, { useEffect } from "react";
import { BsSearch, BsInstagram } from "react-icons/bs";
import {
  FaBars,
  FaFacebookF,
  FaTwitter
} from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { Menu } from "./menu";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Header() {
  const [isMenuOpen, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!isMenuOpen);
  };

  return (
    <div className="">
      <div className="site-mobile-menu site-navbar-target">
        <div className="site-mobile-menu-header">
          <div className="site-mobile-menu-close">
            <span
              className="icofont-close js-menu-toggle"
              onClick={handleMenu}
            ></span>
          </div>
        </div>
        <div className="site-mobile-menu-body"></div>
      </div>

      <nav className="site-nav ">
        <div className="">
          <div className="site-navigation container auto">
            <div className="row">
              <div className="col-md-6 text-center order-1 order-md-2 mb-3 mb-md-0">
                <a href="" className="logo m-0 text-uppercase">
                  DevlogEX
                </a>
              </div>
              <div className="col-md-3 order-3 order-md-1">
                <form action="" className="search-form">
                  <span className="icon-search2">
                    <BsSearch />
                  </span>
                  <input
                    type="search"
                    className="form-control"
                    placeholder="Search..."
                  />
                </form>
              </div>
              <div className="col-md-3 text-end order-2 order-md-3 mb-3 mb-md-0">
                <div className="d-flex">
                  <ul className="list-unstyled social me-auto">
                    <li>
                      <a href="">
                        <span className="icon-twitter">
                          <FaTwitter />
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <span className="icon-facebook">
                          <FaFacebookF />
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <span className="icon-instagram">
                          <BsInstagram />
                        </span>
                      </a>
                    </li>
                  </ul>

                  <div
                    className="navbar"
                    type="button"
                  >
                    <Link to="" className="menu-bar">
                      <FaBars onClick={handleMenu} className="text-2xl"/>
                    </Link>
                  </div>
                  <nav className={isMenuOpen ? "nav-menu active" : "nav-menu"}>
                    <ul className="nav-menu-items" onClick={handleMenu}>
                      <li className="navbar-toggler">
                        <Link to="" className="menu-bars">
                          <AiOutlineClose className="text-2xl text-gray-50" />
                        </Link>
                      </li>
                      {Menu.map((item, index) => {
                        return (
                          <li key={index} className={index.cName}>
                            <Link to={item.path} className="text-lg text-gray-50 flex items-center">
                              {item.icon} 
                              <span className="ml-4">{item.title}</span>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
