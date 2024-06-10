import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import '../style/LoginFrom.css';

const LoginForm = () => {
  return (
    <Container className="login-form-container">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <h2 className="text-center">লগইন</h2>
          <Form>
            <Form.Group controlId="formMobileNumber">
              <Form.Label>মোবাইল নম্বর/এনআইডি/হি-মেইল</Form.Label>
              <Form.Control type="text" placeholder="মোবাইল নম্বর/এনআইডি/হি-মেইল লিখুন" />
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label>পাসওয়ার্ড</Form.Label>
              <Form.Control type="password" placeholder="পাসওয়ার্ড লিখুন" />
            </Form.Group>

            <Form.Group controlId="formCaptcha">
              <Form.Label>Captcha</Form.Label>
              <div className="captcha-container">
                <input type="text" placeholder="Captcha" />
                <div className="captcha-image">reCAPTCHA</div>
              </div>
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              প্রবেশ করুন
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginForm;
