import React, { useContext } from "react";
import AuthContext from "../context/auth/AuthContext";
import { DataContext } from "../context/DataContext";
import Header from "./Header";
const VRScene = () => {
  const authContext = useContext(AuthContext)
  const { user } = authContext
  const dataContext = useContext(DataContext)
	const { data  } = dataContext
  
    const script = document.createElement("script");
    script.src = "/index.js";
    window.results = data;
    script.async = true;
    document.body.appendChild(script);
 
    return (
      <div>
          <Header 
          user={user}
          active = 'virtualtour'
 />
        <div id="pano"></div>

        <div id="sceneList">
          <ul className="scenes">
            {data.map((result) => (
              <a
                href="javascript:void(0)"
                className="scene"
                data-id={result.id}
                key={result.id}
              >
                <li className="text" key={result.id}>
                  {result.title}
                </li>
              </a>
            ))}
          </ul>
        </div>

        <div id="titleBar">
          <h1 className="sceneName"> </h1>
        </div>

        <a href="javascript:void(0)" id="autorotateToggle">
          <img className="icon off" src="img/play.png" alt="play" />

          <img className="icon on" src="img/pause.png" alt="pause" />
        </a>

        <a href="javascript:void(0)" id="fullscreenToggle">
          <img className="icon off" src="img/fullscreen.png" alt="fullscreen" />

          <img className="icon on" src="img/windowed.png" alt="windowed" />
        </a>

        <a href="javascript:void(0)" id="sceneListToggle">
          <img className="icon off" src="img/expand.png" alt="expand" />

          <img className="icon on" src="img/collapse.png" alt="collapse" />
        </a>

        <a
          href="javascript:void(0)"
          id="viewUp"
          className="viewControlButton viewControlButton-1"
        >
          <img className="icon" src="img/up.png" alt="up"/>
        </a>

        <a
          href="javascript:void(0)"
          id="viewDown"
          className="viewControlButton viewControlButton-2"
        >
          <img className="icon" src="img/down.png" alt="down"/>
        </a>

        <a
          href="javascript:void(0)"
          id="viewLeft"
          className="viewControlButton viewControlButton-3"
        >
          <img className="icon" src="img/left.png" alt="left"/>
        </a>

        <a
          href="javascript:void(0)"
          id="viewRight"
          className="viewControlButton viewControlButton-4"
        >
          <img className="icon" src="img/right.png" alt="right" />
        </a>

        <a
          href="javascript:void(0)"
          id="viewIn"
          className="viewControlButton viewControlButton-5"
        >
          <img className="icon" src="img/plus.png" alt="plus" />
        </a>

        <a
          href="javascript:void(0)"
          id="viewOut"
          className="viewControlButton viewControlButton-6"
        >
          <img className="icon" src="img/minus.png" alt="minus"/>
        </a>
      </div>
    );
}

export default VRScene;
