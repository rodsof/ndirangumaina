import React, { useState, useEffect } from "react";
import { TransitionGroup } from "react-transition-group";
import Result from "./Result";
import { CardColumns } from "reactstrap";
import {
  slice, concat, 
} from 'lodash';


const Results = ({results, active}) => {
  
  var LIMIT;
  if( active === "realEstate") {
    LIMIT = 3;
  }
  else {
   LIMIT = 9;
  }

  const LENGTH = results.length;
  const [showMore,setShowMore] = useState(true);
  const [list,setList] = useState(slice(results, 0, LIMIT));
  const [index,setIndex] = useState(LIMIT);

  useEffect(() => {
    if(results.length>0)
      setList(slice(results, 0, LIMIT));
  },[results, LIMIT]);


  const loadMore = () =>{
    const newIndex = index + LIMIT;
    const newShowMore = newIndex < (LENGTH - 1);
    const newList = concat(list, slice(results, index, newIndex));
    setIndex(newIndex);
    setList(newList);
    setShowMore(newShowMore);
  }

  return (
    <section className="property-section">
      <div className="container">
        <div className="section-title">
          <h2>RESULTS </h2>
        </div>
        {results.length === 0 ? (
          <li className="col-lg-4">
            <h3>No results</h3>
          </li>
        ) : (
          <TransitionGroup>
            <CardColumns>
              {list.map((result) => (
                <Result 
                key={ result.id }
                result={result} 
                active={active}
                />
              ))}
            </CardColumns>
            {showMore && <button onClick={loadMore} className="site-btn btn-danger"> Load More </button>}

          </TransitionGroup>
        )}
      </div>
    </section>
  );
};

export default Results;
