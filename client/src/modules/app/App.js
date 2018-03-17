import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Grid, Cell } from 'styled-css-grid';
import Logo from '../../assets/img/logo.svg';

const GridCell = styled(Cell)`
  text-align: right;
  font-size: 14px;
`;

const App = ({ children }) => (
  <Grid columns={9} gap="2px" style={{ width: '80vw', margin: '50px auto' }}>
    <Cell width={5}>
      {' '}
      <img src={Logo} />
    </Cell>
    <GridCell height={2} gap="20px">
      Find a Personal shopper
    </GridCell>
    <GridCell height={2}>Become a Personal Shopper</GridCell>
    <GridCell height={2}>Sign up</GridCell>
    <GridCell height={2}>Login</GridCell>
  </Grid>
);

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
