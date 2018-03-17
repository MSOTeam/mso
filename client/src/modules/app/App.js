import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Navigation from '../navigation/index';
import Logo from '../../assets/img/logo.svg';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 25% 70vh 100px 100px 100px 100px 100px;
  margin: auto;
`;

class App extends Component {
  render() {
    const { children } = this.props;
    return (
      <Grid>
        <Navigation />
        <div style={{ background: 'red' }}>{children}</div>
      </Grid>
    );
  }
}

App.propTypes = {
  children: PropTypes.object
};

export default App;
