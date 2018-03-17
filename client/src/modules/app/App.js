import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Navigation from '../navigation/index';
import SearchImg from '../../assets/img/search_img.jpg';
import Clock from '../../assets/img/clock.svg';
import SearchSVG from '../../assets/img/search.svg';
import Go from '../../assets/img/go.svg';
import { go } from 'react-router-redux/actions';
import { color } from '../../styles/color';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 25% 60vh 800px 100px 100px 100px 100px;
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

const Signupfixed = styled.div`
  background: ${color.primary};
  color: ${color.light};
  width: 100vw;
  height: 70px;
  position: fixed;
   : 0;
  text-align: center;
  font-weight: 900;
  font-size: 20px !important;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 3px;
  cursor: pointer;
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
        {/* {children} */}
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
        <Signupfixed>SIGN UP NOW</Signupfixed>
      </Grid>
    );
  }
}

App.propTypes = {
  children: PropTypes.object
};

export default App;
