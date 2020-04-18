import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import Header from "./Header";
import Search from './Search';


class Home extends Component {
  componentDidMount(){
    if (localStorage.getItem("token")){ // OJO VA !
      this.props.history.push("/");
    }
  }
  render() {
    return (
      <Container>
        <Header
          user={ this.props.user}
          active = { 'home'}
        />
        <Row>
          <Col>
          <Search user={this.props.user} resetState={this.props.resetState} results={this.props.results} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
/*

        */