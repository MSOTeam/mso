import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Navigation from '../navigation/index';
import Logo from '../../assets/img/logo.svg';
import SearchImg from '../../assets/img/search_img.jpg';
import { color } from '../../styles/color';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 25% 70vh 100px 100px 100px 100px 100px;
  margin: auto;
`;

const Search = styled.div`
  background: url(${SearchImg});
  background-size: cover;
  background-position: center;
`;

class App extends Component {
  render() {
    return (
      <Grid>
        <Navigation />
        <Search />
      </Grid>
    );
  }
}

App.propTypes = {
  children: PropTypes.object
};

export default App;
