import React from 'react';
import { Player } from 'video-react';
import ConfirmRemovalModal from './ConfirmRemovalModal';
import NewPropertyModal from './NewPropertyModal';
import VRScene from './VRScene';
import ReactDOM from 'react-dom';
const Result = ({result,user, resetState}) => {
    return ( 
        <div class="col-lg-4">
        <div class="property-item">
            <div class="pi-image">
                <img src= {result.image} />
            </div>
            <h5>{result.title}</h5>
            <Player
      playsInline
      poster="/assets/poster.png"
      src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
    />
        <div id="sceneContainer">
          <VRScene /> 
        </div>

        </div>
                { result.user_profile === user.id ?
                 <div>
                  <NewPropertyModal
                    create={false}
                    result={result}
                    user={user}
                    resetState={resetState}
                    />
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <ConfirmRemovalModal
                    pk={result.id} 
                    resetState={resetState}
                    />
                </div>
                : null}
    </div>			
    );
}

export default Result;

