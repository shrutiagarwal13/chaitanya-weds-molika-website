import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AnimationError from '../images/Cogs-Animation-1.gif';

const ErrorPage = () => {
  return (
    <div className='error-page'>
      <Container>
        <Row>
          <Col md={3}>
            <img src={AnimationError} alt='error' />
          </Col>
          <Col md={9} className='error-msg'>
            Sorry! <br /> We'll be back soon.
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ErrorPage;
