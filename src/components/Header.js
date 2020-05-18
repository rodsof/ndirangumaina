import React, { Component } from "react";
import {Button} from "reactstrap";
import NewPropertyModal from "./NewPropertyModal";
import { Link } from 'react-router-dom';
class Header extends Component {
  render() {
    return (
      <header className="header-section">
        <a href="index.html" className="site-logo">
          <img src="/logo1.png" alt="" />
        </a>
        <nav className="header-nav">
          <ul className="main-menu">
            <li>
              <a
                href="/home"
                className={this.props.active === "home" ? "active" : ""}
              >
                Home
              </a>
            </li>
            <li>
              {" "}
              <a
                href="/virtual"
                className={this.props.active === "virtualtour" ? "active" : ""}
              >
                Virtual Tour
              </a>
            </li>
            <li>
              {" "}
              <a
                href="/users"
                className={this.props.active === "users" ? "active" : ""}
              >
                Users
              </a>
            </li>
            <li>
                <div className="user-panel">
                  <a href="/profile" className="register">
                    {this.props.user.name}
                  </a>
                </div>
            </li>
            <li
          onClick={ () => this.props.logout() } >
<Link to="/">Log Out </Link>
            </li>
            <li>
              <NewPropertyModal
                create={true}
                user={this.props.user}
                resetState={this.props.resetState}
              />
            </li>
           
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
