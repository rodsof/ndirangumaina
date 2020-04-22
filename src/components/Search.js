import React, { Component } from "react";
import Results from './Results';

import clientAxios from "../config/axios";

class Search extends Component {
	constructor(props){
		super(props);
	}
	 
	state = {
		title: "",
		results: this.props.results
		  };

	
	  defaultIfEmpty = (value) => {
		return value === "" ? "" : value;
	  };
	
	  change = e => {
		this.setState({ [e.target.name]: e.target.value });
	  }
	search = e => {
		e.preventDefault();
		var title = this.state.title;
		this.props.search(title);
	  }
	
    render() {
      return (
		  <div>
        <section className="hero-section set-bg">
		<div className="container">
			<div className="hero-warp">
				<form className="main-search-form" onSubmit={this.search} encType="multipart/form-data">
                <div className="search-type">
						<div className="st-item">
							<input type="radio" name="st" id="states" checked/>
							<label htmlFor="states">REAL ESTATES</label>
						</div>                        
					</div>
					<div className="search-input">
						<input type="text" name="title" 
						placeholder="Title" 
						 onChange={this.change}
						 value={this.defaultIfEmpty(this.state.title)}
						 />
						<button type="submit" className="site-btn btn-danger">Search</button>
					</div>
				</form>
			</div>
		</div>
	</section>
	 <Results 
	 results = { this.props.results }
	 user = { this.props.user }
	 resetState = { this.props.resetState }
	 />
	 </div>
      );
    }
}

export default Search;