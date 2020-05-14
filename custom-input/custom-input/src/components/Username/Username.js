import React from 'react';

const Username = ({ user, handleUserClick, index }) => {
  return (
    <li key={index} onClick={() => handleUserClick(user.name)}>
      {user.name}
    </li>
  );
};

export default Username;
