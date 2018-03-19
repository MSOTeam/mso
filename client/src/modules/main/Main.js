import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Search from '../search/Search';
import Clock from '../../assets/img/clock.svg';
import SearchSVG from '../../assets/img/search.svg';
import Go from '../../assets/img/go.svg';
import { color } from '../../styles/color';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 25% 60vh 800px 100px 100px 100px 100px;
  margin: auto;
`;

class Main extends Component {
  render() {
    return (
      <Grid>
        <Search />
        <div style={{ background: color.light }}>
          HOW IT WORKS
          <img src={Clock} />
          <img src={SearchSVG} />
          <img src={Go} />
        </div>
        <div style={{ background: color.secondary }}>EXPLORE OUR SHOPPERS</div>
        <div style={{ background: color.lightgrey }}>
          what do our customers say
        </div>
        <div style={{ background: color.dark, color: color.light }}>Footer</div>
      </Grid>
    );
  }
}

export default Main;
