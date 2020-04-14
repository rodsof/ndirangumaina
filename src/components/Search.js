import React, { Component } from "react";

class Search extends Component {
    render() {
      return (
        <section class="hero-section set-bg">
		<div class="container">
			<div class="hero-warp">
				<form class="main-search-form">
                <div class="search-type">
						<div class="st-item">
							<input type="radio" name="st" id="videos" checked/>
							<label for="videos">Videos</label>
						</div>
						<div class="st-item">
							<input type="radio" name="st" id="virtualtours"/>
							<label for="virtualtours">Virtual Tours Photos</label>
						</div> 
						<div class="st-item">
							<input type="radio" name="st" id="users"/>
							<label for="virtualtours">Users</label>
						</div>                          
					</div>
					<div class="search-input">
						<input type="text" placeholder="Search"/>
						<button class="site-btn">Search</button>
					</div>
				</form>
			</div>
		</div>
	</section>
      );
    }
}

export default Search;