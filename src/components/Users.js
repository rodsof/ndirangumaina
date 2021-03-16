import React from "react";
import { Col, Container, Row } from "reactstrap";
import Header from "./Header";
import Search from './Search';


const Users = () => {
    return (
      <Container>
        <Header
          active = { 'users'}
        />
        <Row>
          <Col>
          <Search active={"users"}/>
          </Col>
        </Row>
      </Container>
    );
  }


export default Users;
