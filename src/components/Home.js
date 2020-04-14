import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import Header from "./Header";
import Search from './Search';
import Results from './Results';
import axios from "axios";


import { API_URL_DATA } from "../constants";

class Home extends Component {
  state = {
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
      image: "/home-3.jpg",
      video: "http://www.w3schools.com/html/mov_bbb.mp4"
    }
  ],
  user: {id: 1, name: "Sofia Rodriguez"}
  };


  componentDidMount() {
    this.resetState();
  }

  getResults = () => {
    axios.get(API_URL_DATA).then(res => this.setState({ results: res.data }));
  };

  resetState = () => {
    this.getResults();
  };

  render() {
    return (
      <Container>
        <Header
          user={ this.state.user}
        />
        <Row>
          <Col>
          <Search />
          </Col>
        </Row>
        <Results 
        results = { this.state.results }
        user = { this.state.user }
        resetState = { this.resetState }
        />
      </Container>
    );
  }
}

export default Home;