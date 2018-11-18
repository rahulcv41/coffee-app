/**
 * Component - Navbar
 * MaterializeCSS Navbar component
 * @see {@link https://materializecss.com/navbar.html | Navbar}
 */

/**
 * Import react library
 */
import React, { Component } from "react";
import "./Navbar.css";

/**
 * Router
 */
import { BrowserRouter, Route, Link } from "react-router-dom";

/**
 * @class
 * @name Navbar
 * @description MaterializeCSS Navbar component
 * @extends Component
 */
class Navbar extends Component {
  
  /**
   * Class constructor
   */
  constructor(props) {
    super(props);
    let config = {
      ...props
    };
    this.state = {
      options: {
        logo: config.logo,
        centerLogo: config.centerLogo || "true",
        color: config.color || "white ",
        fixed: config.fixed || "false",
        textColor: config.textColor || "brown-text"
      },
      cartData: config.cartData || 0
    };
  }

  componentDidMount() {
    let elems = document.querySelectorAll('.sidenav');
    let instances = M.Sidenav.init(elems);    
  }

  /**
   * Default render method
   */
  render() {
    return (
      <div className={`${this.state.options.fixed === "true" ? "navbar-fixed" : ""}`}>
        <nav className={`${this.state.options.color}`}>
          <a
            href="#!"
            className={`brand-logo ${
              this.state.options.centerLogo === "true" ? "center" : ""
              } ${this.state.options.textColor}`}
          >
            {this.state.options.logo}
          </a>
          <a href="#" data-target="mobile-demo" className="sidenav-trigger brown-text"><i className="material-icons">menu</i></a>
          <div className="nav-wrapper">
            <ul id="nav-mobile" className="left hide-on-med-and-down">
              <li><Link to="/home" className="textColor Home" >Home</Link></li>
              <li><Link to="/about"className="textColor" href="#!">About us</Link></li>
              <li><Link to="/contact" className="textColor" href="#!">Contact us</Link></li>
            </ul>
            <ul id="nav-mobile" className="right">
              <li><a className="textColor store hide-on-med-and-down" href="#!"><i className="material-icons left">store</i>Shop</a></li>
              <li><a className="textColor Cart" href="#!">
              <span className="new badge brown right">{this.props.cartData ? Object.keys(this.props.cartData).length : 0}</span>
              <i className="material-icons left">child_friendly</i><span className="rmcart">Cart</span></a></li>

            </ul>
            {this.props.children}
          </div>
        </nav>
        <ul className="sidenav" id="mobile-demo">
          <li><a className="textColor" href="#!">Home</a></li>
          <li><div className="divider"></div></li>
          <li><a className="textColor" href="#!">About us</a></li>
          <li><div className="divider"></div></li>
          <li><a className="textColor" href="#!">Contact us</a></li>
          <li><div className="divider"></div></li>
          <li><a className="textColor" href="#!"><i className="material-icons left">store</i>Shop</a></li>
          <li><div className="divider"></div></li>
          <li><a className="textColor Cart" href="#!"><i className="material-icons left">child_friendly</i>
          </a></li>
          <li><div className="divider"></div></li>
        </ul>
      </div>
    );
  }
}

export default Navbar;