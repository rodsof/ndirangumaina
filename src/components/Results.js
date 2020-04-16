import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Result from "./Result";
const Results = ({ results, user }) => {
  return (
    <section className="property-section">
      <div className="container">
        <div className="section-title">
          <h2>RESULTS </h2>
        </div>
        {results.length === 0 ? (
          <li className="col-lg-4">
            <p>No results</p>
          </li>
        ) : (
          <TransitionGroup>
            <div className="row mt-5">
              {results.map((result) => (
                <Result 
                key={ result.id }
                result={result} 
                user={user} />
              ))}
            </div>
          </TransitionGroup>
        )}
      </div>
    </section>
  );
};

export default Results;
