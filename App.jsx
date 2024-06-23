import React from 'react';
import UserList from './components/UserList.jsx';
import PostList from './components/PostList.jsx';
import UserForm from './components/UserForm/jsx';

const App = () => {

  return(
    <div className='App'>
      <h1>React Toolkit Example</h1>
      <UserForm />
      <UserList />
      <PostList />
    </div>
  );
};

export default App;
