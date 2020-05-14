import React from 'react';
import Username from '../Username/Username';

import './users.css';

const Users = ({ data, handleUserClick }) => (
  <ul>
    {data.map((user, index) => (
      <Username key={index} user={user} handleUserClick={handleUserClick} />
    ))}
  </ul>
);

export default Users;
