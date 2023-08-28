import React from 'react';
import { useSelector } from 'react-redux';
import { useActions } from '../../hooks/useActions';

const User = () => {
  const { isLoading, error, user } = useSelector((state) => state.users);

  const { getUserById } = useActions();

  console.log('user: ', user);

  return (
    <>
      <button onClick={() => getUserById(1)}>Get user</button>

      <div>
        {isLoading ? (
          'Loading...'
        ) : error ? (
          <p>{error.message}</p>
        ) : user?.name ? (
          <h2>User: {user.name}</h2>
        ) : (
          <h2>User is not found</h2>
        )}
      </div>
    </>
  );
};

export { User };
