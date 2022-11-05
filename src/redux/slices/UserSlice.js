import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userid: "",
    username: "",
    firstname: "",
    lastname: "",
    email: ""
}

const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action) => {
        const newUser = action.payload
        state.userid = newUser._id
        state.username = newUser.username
        state.firstname = newUser.firstname
        state.lastname = newUser.lastname
        state.email = newUser.email
    }
  }
});

export const userActions = UserSlice.actions

export default UserSlice.reducer