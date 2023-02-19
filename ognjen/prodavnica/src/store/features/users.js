import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    users: [],
    user: {}
};

export const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        addUsers: (state, { payload }) => {
            state.users = payload;
        },
        currentUser: (state, { payload }) => {
            state.user = payload
        }
    }
})

export const { addUsers, currentUser} = usersSlice.actions;
export default usersSlice.reducer;