import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../features/users/userSlice.js';
import { nanoid } from '@reduxjs/toolkit';


const UserForm = () => {
  const [ name, setName ] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) = {
    e.preventDefault();
    dispatch(addUser({ id: nanoid(), name }));
    setName('');
  };
  
return (
  <form onSubmit={handleSubmit}>
    <input 
      type='text'
      value={name}
      onChange={(e) => setName(e.target.value)}
      placeholder='Enter user name'/>
    <button type='Submit'>Add user</button>
  </form>
  );
};

export default UserForm;
