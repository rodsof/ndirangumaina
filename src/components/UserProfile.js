import React from "react";
import { Col, Container, Row } from "reactstrap";
import Header from "./Header";
import NewUserModal from "./NewUserModal";

const UserProfile = ({ user, resetState }) => {

  return (
    <div>
      <Header user={user} />
      <Row>
        <div className="user-section">
          <div className="user-warp">
            <div className="user-image">
              <img src="/user.png" />
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
            <NewUserModal create={false} user={user} resetState={resetState} />
          </div>
          </div>
        </div>
      </Row>
    </div>
  );
};
export default UserProfile;
