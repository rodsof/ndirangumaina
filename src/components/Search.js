import React, { Component } from "react";
import Results from './Results';
import axios from "axios";
import { API_URL_DATA } from "../constants";
import clientAxios from "../config/axios";

class Search extends Component {
	constructor(props){
		super(props);
		this.timeOut=0;
	}
	 
	state = {
		title: "",
		results: this.props.results
		  };

	
	  defaultIfEmpty = (value) => {
		return value === "" ? "" : value;
	  };
	
	search = e => {
		e.preventDefault();
		this.setState({ [e.target.name]: e.target.value });
		var title = this.state.title;
		if(title !== "" && title !== undefined){
			  if(this.timeout) clearTimeout(this.timeout);
			  this.timeout = setTimeout(() => {
				clientAxios.get('SpatialArdhi/data', { params: { title: this.state.title }} ).then(res =>  {
					this.setState({ results:res.data } );
				});
			  }, 300);
		}
		if(title === ""){
			clientAxios.get('SpatialArdhi/data').then(res =>  {
				this.setState({ results:res.data } );
			});
		}
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
						 onChange={this.search}
						 value={this.defaultIfEmpty(this.state.title)}
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