import React from 'react';
import { Link } from 'react-router-dom';

const Error404 = () => {
  return(
      <div>
            <h2>Error 404</h2>
            <p>Not Found</p>
            <p><Link to="/">Continuar comprando</Link></p>
      </div>
  )

};

export default Error404;