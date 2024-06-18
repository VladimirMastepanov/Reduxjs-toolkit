import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './usersSlice.js';
import postsReducer from './postsSlice.js';

const store = configureStore({
  reducer: {
    users: usersReduser,
    posts: postsReducer,
  },
});

export default store;
