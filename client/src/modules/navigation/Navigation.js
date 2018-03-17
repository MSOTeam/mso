import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { color } from '../../styles/color';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import Logo from '../../assets/img/logo.svg';

const Subgrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 15% 15% 5% 8%;
  grid-template-rows: 1fr;
  grid-column-gap: 40px;
  align-items: center;
  width: 95vw;
  margin: 2.2% auto;
`;

const Box = styled.p`
  text-align: right;
  cursor: pointer;
`;

const Item = styled.span`
  padding: 15px;
  box-sizing: border-box;
  ${props =>
    props.signup &&
    css`
      background: ${color.primary};
      color: ${color.light};
      font-weight: bold;
    `};
`;

const Navigation = ({ children, dispatch }) => (
  <Subgrid>
    <img src={Logo} />
    <Box>Find a Personal Shopper</Box>
    <Box>Become a Personal Shopper</Box>
    <Box>Login</Box>
    <Box onClick={() => dispatch(push('/register'))}>
      <Item signup>Sign up!</Item>
    </Box>
  </Subgrid>
);

Navigation.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default connect()(Navigation);
