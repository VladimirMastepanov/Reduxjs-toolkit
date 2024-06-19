import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../features/users/usersSlice.js';
import postsReducer from '../features/posts/postsSlice.js';

const store = configureStore({
  reducer: {
    users: usersReduser,
    posts: postsReducer,
  },
});

export default store;
