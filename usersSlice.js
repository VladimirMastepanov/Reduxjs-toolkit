inport { createSlise, createEtityAdapter } from '@redux.js/toolkit'

const usersAdapter = createAdapter();
const initialState = usersAdapter.getInitialState();

const usersSlise = createSlise({
  name: 'users',
  initialState,
  redusers: {
    addUser: userAdapter.addOne,
    removeUser: userAdapter.removeOne,
  },
});

export const { addUser, removeUser } = usersSlice.actions;
export const usersSelectors = userAdapter.getSelectors((state) => state.users);
export default usersSlice.reducer;
