import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import Header from "./Header";
import Search from './Search';


class Home extends Component {

  render() {
    return (
      <Container>
        <Header
          user={ this.props.user}
        />
        <Row>
          <Col>
          <Search user={this.props.user} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
/*

        */