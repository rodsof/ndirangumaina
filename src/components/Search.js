import React, { Component } from "react";
import Results from './Results';
import axios from "axios";
import { API_URL_DATA } from "../constants";

class Search extends Component {

	state = {
		title: "",
		results: [{
			id: 1,
			user_profile: 2,
			title: "Home 1",
			image: "/home-1.jpg",
			video: "http://www.w3schools.com/html/mov_bbb.mp4"
		},{
			id: 2,
			user_profile: 1,
			title: "Home 2",
			image: "/home-2.jpeg",
			video: "http://www.w3schools.com/html/mov_bbb.mp4"
		},{
		  id: 3,
		  title: "Home 3",
		  user_profile: 5,
		  image: "/home-3.jpg",
		  video: "http://www.w3schools.com/html/mov_bbb.mp4"
		}
	  ]
	  };
	
	 
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

	  getResults = () => {
		axios.get(API_URL_DATA).then(res => this.setState({ results: res.data }));
	  };
	
	  resetState = () => {
		this.getResults();
	  };

    render() {
      return (
		  <div>
        <section className="hero-section set-bg">
		<div className="container">
			<div className="hero-warp">
				<form className="main-search-form" onSubmit={this.search} enctype="multipart/form-data">
                <div className="search-type">
						<div className="st-item">
							<input type="radio" name="st" id="states" checked/>
							<label htmlFor="states">Estates</label>
						</div>
						<div className="st-item">
							<input type="radio" name="st" id="users"/>
							<label htmlFor="virtualtours">Users</label>
						</div>                          
					</div>
					<div className="search-input">
						<input type="text" name="title" placeholder="Title" 
						 onChange={this.onChange}
						 value={this.defaultIfEmpty(this.state.name)}
						 />
						<button type="submit" className="site-btn">Search</button>
					</div>
				</form>
			</div>
		</div>
	</section>
	 <Results 
	 results = { this.state.results }
	 user = { this.props.user }
	 resetState = { this.resetState }
	 />
	 </div>
      );
    }
}

export default Search;