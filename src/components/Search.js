import React from "react";
import { useContext, useState } from "react";
import { DataContext } from "../context/DataContext";
import { UsersContext } from "../context/UsersContext";
import Results from './Results';


const Search = (props) => {
	const [title, setSearch] = useState("");

	// destructuring

	const dataContext = useContext(DataContext)
	const { data, searchData } = dataContext
	const usersContext = useContext(UsersContext)
	const { users, searchUsers, saveSearch } = usersContext;
	const onChange = e => {
		e.preventDefault();
		setSearch({ [e.target.name]: e.target.value });
	}
	const onSearch = e => {
		e.preventDefault();
		if (props.active === "users") {
			searchUsers(title);
			saveSearch(true)
		}
		else {
			searchData(title)
			saveSearch(true)
		}
	}

	return (
		<div>
			<section className="hero-section set-bg">
				<div className="container">
					<div className="hero-warp">
						<form className="main-search-form" onSubmit={onSearch} encType="multipart/form-data">
							<div className="search-type">
								<div className="st-item">
									<input onChange={onChange} type="radio" name="st" id="states" checked={props.active === "realEstate" ? true : null} />
									<label htmlFor="states">REAL ESTATES</label>
								</div>
								<div className="st-item">
									<input onChange={onChange} type="radio" name="st" id="states" checked={props.active === "users" ? true : null} />
									<label htmlFor="states">USERS</label>
								</div>
							</div>
							<div className="search-input">
								<input type="text" name="title"
									placeholder={props.active === "users" ? "Username" : "Title"}
									onChange={onChange}
									value={title}
								/>
								<button type="submit" className="site-btn btn-danger">Search</button>
							</div>
						</form>
					</div>
				</div>
			</section>
	
			<Results
				results={props.active === "users" ? users : data}
				active={props.active}
			/>
		</div>
	);
}


export default Search;