import React from "react";
import NewPropertyModal from "./NewPropertyModal";
import { Link } from 'react-router-dom';
import AuthContext from "../context/auth/AuthContext";
import { useContext } from "react";

const Header = (props) => {
  const authContext = useContext(AuthContext)
  const { logout, user } = authContext;
  const onLogout = (e) => {
    e.preventDefault();
    logout();
    // props.history.push("/")
  }

  return (
    <header className="header-section">
      <Link to="/" className="site-logo">
        <img src="/logo1.png" alt="" />
      </Link>
      <nav className="header-nav">
        <ul className="main-menu">
          <li>
            <Link
              to="/home"
              className={props.active === "home" ? "active" : ""}
            >
              Home
              </Link>
          </li>
          <li>
            {" "}
            <Link
              to="/users"
              className={props.active === "users" ? "active" : ""}
            >
              Users
              </Link>
          </li>
          <li>
            {" "}
            <Link
              to="/virtual"
              className={props.active === "virtualtour" ? "active" : ""}
            >
              Virtual Tour
              </Link>
          </li>

          <li>
            <div className="user-panel">
              <Link to="/profile" className="register">
                { user ? user.name : null} 
              </Link>
            </div>
          </li>
          <li
            onClick={onLogout} >
              <Link to="#">
            Log Out</Link>
            </li>
          <li>

            <NewPropertyModal
              create={true}
              user={user}
            />
          </li>

        </ul>
      </nav>
    </header>
  );


}

export default Header;
