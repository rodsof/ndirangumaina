import React, {useContext} from "react";
import { Player } from "video-react";
import ConfirmRemovalModal from "./ConfirmRemovalModal";
import NewPropertyModal from "./NewPropertyModal";
import PannellumReact from "./PanellumReact";
import {  Card, CardTitle, CardImg, CardBody } from "reactstrap";
import AuthContext from "../context/auth/AuthContext";

const Result = ({ result, active }) => {
  const authContext = useContext(AuthContext)
  const {user} = authContext
  if (active === "realEstate") {
    return (
      <Card mt="10">
        <CardImg top  src={result.image} alt="real estate image"></CardImg>
        <CardBody>
          <CardTitle><h5>{result.title}</h5></CardTitle>
          <Player playsInline src={result.video} />
          <PannellumReact
            image={`https://cors-anywhere.herokuapp.com/${result.image}`}
            // image={result.image}
            video={result.video}
          />
        </CardBody>
        { user && result.user_profile === user.id ? (
          <div>
            <NewPropertyModal
              create={false}
              result={result}
              user={user}
            />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <ConfirmRemovalModal result={result} />
          </div>
        ) : null}
      </Card>
    );
  } else {
    return (
      <Card>
        <div className="property-item">
          <div className="pi-image">
            <img src={result.avatar} alt="Avatar" />
          </div>
          <h5>{result.name}</h5>
          <p> {result.bio} </p>
        </div>
      </Card>
    );
  }
};

export default Result;
