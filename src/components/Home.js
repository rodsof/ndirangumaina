import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import Header from "./Header";
import Search from './Search';


class Home extends Component {
  componentDidMount(){
    if (!localStorage.getItem("token")){ 
      this.props.history.push("/");
    }
  }
  render() {
    return (
      <Container>
        <Header
          user={ this.props.user}
          active = { 'home'}
          logout={ this.props.logout }
        />
        <Row>
          <Col>
          <Search active={"realEstate"} user={this.props.user} resetState={this.props.resetState} results={this.props.results} search={this.props.search} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
/*

        */