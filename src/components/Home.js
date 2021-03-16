import React from "react";
import { Col, Container, Row } from "reactstrap";
import Header from "./Header";
import Search from './Search';


const Home = () => {
    return (
      <Container>
        <Header
          active = { 'home'}
        />
        <Row>
          <Col>
          <Search active={"realEstate"} />
          </Col>
        </Row>
      </Container>
    );
}

export default Home;
