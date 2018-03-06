import React from 'react';
import PropTypes from 'prop-types';

const App = ({ children }) => (
  <div>
    <div style={{ height: 200 }}>
      Header
    </div>
    <div>{children}</div>
    <div style={{ height: 200, background: '#000', color: '#fff' }}>
      Footer
    </div>
  </div>
);

App.propTypes = {
  children: PropTypes.object.isRequired,
};

export default App;
