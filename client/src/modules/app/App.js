import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-flexbox-grid';

const App = ({ children }) => (
  <Grid>
    <Row middle="xs" style={{ height: 100 }}>
      <Col xsOffset={2} xs={5}>
        <h3>MYSHOPOVER</h3>
      </Col>
      <Col
        xs={4}
        style={{
          display: 'flex',
          fontSize: 12,
          justifyContent: 'space-between'
        }}
      >
        <div>Find a personal shopper</div>
        <div>Become a personal shopper</div>
        <div>Sign up</div>
      </Col>
    </Row>
    <Row>
      <Col>{children}</Col>
    </Row>
    <Row
      middle="xs"
      center="xs"
      style={{ height: 200, background: '#000', color: '#fff' }}
    >
      <Col>Footer</Col>
    </Row>
  </Grid>
);

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
