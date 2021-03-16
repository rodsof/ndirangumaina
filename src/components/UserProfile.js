import React from "react";
import { Row } from "reactstrap";
import Header from "./Header";
import NewUserModal from "./NewUserModal";
import AuthContext from "../context/auth/AuthContext";
import { useContext } from "react";

const UserProfile = () => {
  const authContext = useContext(AuthContext)
  const { user } = authContext;

  return (
    <div>
      <Header 
      active='profile'
/>
      <Row>
        <div className="user-section">
          <div className="user-warp">
            <div className="user-image">
              <img src={user.avatar} alt="avatar"/>
            </div>
            <h2>{user.name}</h2>
            <h4>
              <strong>Organization: </strong>
              {user.organization}{" "}
            </h4>
            <h4>
              <strong>Bio: </strong>
              {user.bio}{" "}
            </h4>
            <h4>
              <strong>Email: </strong>
              {user.email}{" "}
            </h4>
            <div>
            <NewUserModal create={false} user={user}  />
          </div>
          </div>
        </div>
      </Row>
    </div>
  );
};

export default UserProfile;
