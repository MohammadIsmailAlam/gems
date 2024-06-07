import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import PieChart from "./components/PieChart";
import LoginForm from "./components/loginFrom";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Header />
      <Container fluid className="main-container">
        <Row className="justify-content-center align-items-center">
          <Col md={6} className="text-center">
            <PieChart />
          </Col>
          <Col md={6}>
            <LoginForm />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;
