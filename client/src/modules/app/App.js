import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Navigation from '../navigation/index';
import SearchImg from '../../assets/img/search_img.jpg';
import { color } from '../../styles/color';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 25% 60vh 100px 100px 100px 100px 100px;
  margin: auto;
`;

const NavWrapper = styled.div`
  background: ${color.light};
  position: sticky;
  top: 0px;
`;

const Search = styled.div`
  background: url(${SearchImg});
  background-size: cover;
  background-position: center;
`;

class App extends Component {
  render() {
    const { children } = this.props;
    return (
      <Grid>
        <NavWrapper>
          <Navigation />
        </NavWrapper>
        <Search />
        <div style={{ background: color.primary }} />
        <div style={{ background: color.secondary }} />
        <div style={{ background: color.lightgrey }} />
        <div style={{ background: color.dark }} />
      </Grid>
    );
  }
}

App.propTypes = {
  children: PropTypes.object
};

export default App;
