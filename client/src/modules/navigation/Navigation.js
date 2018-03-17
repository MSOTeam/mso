import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Grid, Cell } from 'styled-css-grid';
import Logo from '../../assets/img/logo.svg';

const Subgrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 15% 18% 7% 5%;
  grid-template-rows: 1fr;
  grid-column-gap: 40px;
  align-items: center;
  width: 80vw;
  margin: 50px auto;
`;

const Item = styled.a`
  text-align: right;
  cursor: pointer;
`;

const Navigation = ({ children }) => (
  <Subgrid>
    <img src={Logo} />
    <Item>Find a Personal Shopper</Item>
    <Item>Become a Personal Shopper</Item>
    <Item>Sign up!</Item>
    <Item>Login</Item>
  </Subgrid>
);

export default Navigation;
