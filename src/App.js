import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import PieChart from "./components/PieChart";
import Header from "./components/Header";
import LoginForm from './components/LoginForm';

const App = () => {
  return (
    <>
      <Header />
      <Container fluid className="main-container">
        <Row className="d-flex justify-content-between align-items-start">
          <Col md={6} className="d-flex justify-content-start">
            <PieChart />
          </Col>
          <Col md={6} className="d-flex justify-content-end">
            <LoginForm />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;
