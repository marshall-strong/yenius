import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <h1>404: Not found</h1>
      <Link to='/'>Back to home</Link>
    </div>
  );
}

export default NotFound;
