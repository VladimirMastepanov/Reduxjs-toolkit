import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { usersSelectors, removeUser } from '../features/users/userSlice.js';

const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector(usersSelectors.selectAll);

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name}
            <button onClick={() => dispotch(removeUser(user.id))}>
              Remove
            </button>
          </li> 
        ))}
      </ul>
    </div>
    );
};

export default UserList;
