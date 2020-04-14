import React, { Component } from "react";
import NewPropertyModal from "./NewPropertyModal";

class Header extends Component {
    render() {
      return (
        <header className="header-section">
        <a href="index.html" className="site-logo">
          <img src="/logo1.png" alt="" />
        </a>
        <nav className="header-nav">
          <ul className="main-menu">
            <li><a href="#" className="active">Home</a></li>
            <NewPropertyModal 
            create={true}
            user={this.props.user}
          />
          </ul>
          <div className="header-right">
            <div className="user-panel">
              <a href="/profile" className="register">User</a>
            </div>
          </div>
        </nav>
      </header>
      );
    }
  }
  
  export default Header;