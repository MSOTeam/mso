import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Logo from '../../assets/img/logo.svg';
const App = ({ children }) => (
  <Grid style={{ fontSize: 12 }}>
    <Row middle="xs" style={{ height: 100 }}>
      <Col xsOffset={2} xs={5}>
        <img src={Logo} />
      </Col>
      <Col xs={2}>Find a personal shopper</Col>
      <Col xs={2}>Become a personal shopper</Col>
      <Col>
        <button
          style={{
            background: '#08CCA6',
            border: 0,
            color: '#fff',
            height: 40,
            cursor: 'pointer'
          }}
        >
          Sign up
        </button>
      </Col>
    </Row>
    <Row>
      <Col>{children}</Col>
    </Row>
    <Row
      middle="xs"
      center="xs"
      style={{
        height: 200,
        background: '#000',
        color: '#fff',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        fontSize: 12
      }}
    >
      <Col
        xs={2}
        style={{
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <div>About</div>
        <div>Help</div>
        <div>Blog</div>
        <div>FAQ</div>
      </Col>
    </Row>
  </Grid>
);

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
