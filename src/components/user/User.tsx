import React from 'react';
import { useSelector } from 'react-redux';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const User = () => {
  const { user, isLoading, error } = useTypedSelector((state) => state.user);

  const { getUserById } = useActions();

  console.log(user);
  console.log(isLoading);
  console.log(error);

  return (
    <div>
      <button onClick={() => getUserById(1)}>Fetch user</button>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <div>{error}</div>
      ) : user?.name ? (
        <h2>User: {user.name}</h2>
      ) : (
        <h2>User is not found</h2>
      )}
    </div>
  );
};

export default User;
