import React from 'react';

const Register = () => (
  <form>
    <div>
      <label htmlFor="name">
        Name:
        <input type="text" id="name" />
      </label>
    </div>
    <div>
      <label htmlFor="description">
        Description:
        <input type="text" id="description" />
      </label>
    </div>
  </form>
);

export default Register;
