import { UserEmptyState } from '../../models/user.type';
import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: UserEmptyState,
  reducers: {
    createUser: (state, action) => {
      return action.payload;
    }
  }
});

export const { createUser } = userSlice.actions;

export default userSlice.reducer;
