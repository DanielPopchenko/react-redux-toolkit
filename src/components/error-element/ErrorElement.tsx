import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorElement = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>An error ocuured!</h1>
      <button onClick={() => navigate('/')}>Go Home</button>
    </div>
  );
};

export default ErrorElement;
