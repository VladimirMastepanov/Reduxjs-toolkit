import { createSlice, createEntitiAdapter } from '@reduxjs/toolkit';
impotr { removeUser } from './usersSlice.js';

const postsAdapter = createEntitiAdapter();
const initialState = postsAdapter.getInitialState();

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPosr: postsAdapter.addOne,
    removePost: postsAdapter.removeOne,
  },
  extpaReducers: (builder) => {
    builder.addCase(removeUser, (state, action) => {
      const userId = action.payload;
      const restEntities = Object.values(state.entities).filter((post) => post.author !== userId);
      postsAdapter.setAll(state, restEntities);
    });
  };
});

const { addPost, removePost } = postsSlise.actions;
const postsSelectors = postsAdapter.getSelectors((state) => state.posts);

export { addPost, removePost, postsSelectors };
export default postsSlise.reducer;
  
