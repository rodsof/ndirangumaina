import React from 'react';
import { Player } from 'video-react';
import ConfirmRemovalModal from './ConfirmRemovalModal';
import NewPropertyModal from './NewPropertyModal';

const Result = ({result,user, resetState}) => {
    return ( 
        <div className="col-lg-4">
        <div className="property-item">
            <div className="pi-image">
                <img src= {result.image} />
            </div>
            <h5>{result.title}</h5>
            <p> Video Player </p>
            <Player
      playsInline
      src={result.video}
    />

                </div>
                { result.user_profile === user.id ?
                 <div>
                  <NewPropertyModal
                    create={false}
                    result={result}
                    resetState={resetState}
                    />
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <ConfirmRemovalModal
                    result={result} 
                    resetState={resetState}
                    />
                </div>
                : null}
    </div>			
    );
}

export default Result;
