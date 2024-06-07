import React from "react";
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import "../style/Header.css";

const Header = () => {
  return (
    <div>
      <Container fluid className="custom-header-container">
        <Row className="align-items-center">
          <Col xs={6}>
            <Navbar expand="lg" className="custom-header">
              <Navbar.Brand href="#home" className="d-flex align-items-center gap-2">
                <img
                  src={`${process.env.PUBLIC_URL}/img/logo512.png`}
                  width="50"
                  height="50"
                  className="d-inline-block align-top"
                  alt="Logo"
                />
                <span className="brand-text fw-bold text-gradient-animation lh-base m-0">
                  সরকারি কর্মচারী বাতায়ন
                </span>
              </Navbar.Brand>
            </Navbar>
          </Col>
          <Col xs={6} className="text-right">
            <Navbar expand="lg" className="custom-header">
              <Navbar.Toggle aria-controls="navbar-right" />
              <Navbar.Collapse className="navbar-right">
                <Nav className="ml-auto">
                  <Nav.Link href="#user-guide">ব্যবহারকারী-নির্দেশিকা</Nav.Link>
                  <Nav.Link href="#notifications">ঘোষণাপত্র</Nav.Link>
                  <Nav.Link href="#feedback">আপনার মতামত</Nav.Link>
                </Nav>
                <img
                  src={`${process.env.PUBLIC_URL}/img/default.png`}
                  width="50"
                  height="50"
                  className="d-inline-block align-top"
                  alt="Logo"
                />
              </Navbar.Collapse>
            </Navbar>
          </Col>
        </Row>
      </Container>

      <Navbar expand="lg" className="custom-header-second">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="#home">হোম</Nav.Link>
            <Nav.Link href="#about">কার্যক্রম সম্পর্কে</Nav.Link>
            <Nav.Link href="#archive">আর্কাইভ</Nav.Link>
            <Nav.Link href="#officers">কর্মকর্তাদের তালিকা</Nav.Link>
            <Nav.Link href="#orders">সরকারি আদেশ</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
