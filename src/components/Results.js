import React from "react";
import { TransitionGroup } from "react-transition-group";
import Result from "./Result";
import { CardColumns } from "reactstrap";
const Results = ({results, user,resetState, active}) => {
 
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
              {results.map((result) => (
                <Result 
                key={ result.id }
                result={result} 
                user={user}
                resetState={resetState}
                active={active}
                />
              ))}
            </CardColumns>
          </TransitionGroup>
        )}
      </div>
    </section>
  );
};

export default Results;
