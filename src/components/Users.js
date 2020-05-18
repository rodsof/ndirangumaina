import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import Header from "./Header";
import Search from './Search';


class Users extends Component {
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
          active = { 'users'}
          logout={ this.props.logout }
        />
        <Row>
          <Col>
          <Search user={this.props.user} active={"users"} resetState={this.props.resetState} results={this.props.results} search={this.props.search} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Users;
/*

        */