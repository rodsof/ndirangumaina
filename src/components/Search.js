import React, { Component } from "react";
import Results from './Results';
import axios from "axios";
import { API_URL_DATA } from "../constants";

class Search extends Component {
	
	 
	  onChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	  };
	
	  defaultIfEmpty = (value) => {
		return value === "" ? "" : value;
	  };
	
	search = e => {
		e.preventDefault();
		axios.get(API_URL_DATA, { params: { title: this.state.title }} ).then(res =>  {
			console.log(res);
		  });
	  };
	
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
							<label htmlFor="states">Real Estates</label>
						</div>                        
					</div>
					<div className="search-input">
						<input type="text" name="title" placeholder="Title" 
						 onChange={this.onChange}
						 />
						<button type="submit" className="site-btn">Search</button>
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