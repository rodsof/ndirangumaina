import React, { Component } from 'react';
 
import { Pannellum, PannellumVideo } from "pannellum-react";

 
 
const PannellumReact = ({image, video}) => (
  <div>
    <Pannellum
        width="100%"
        height="500px"
        image={image}
        pitch={10}
        yaw={180}
        hfov={110}
        autoLoad
        onLoad={() => {
            console.log("panorama loaded");
        }}
    >
      
    
    </Pannellum>
 
    {/******  for video 360 component *******/}
 
  
 
    </div>
);
 
export default PannellumReact;