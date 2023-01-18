import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    users: []
};

export const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        addUsers: (state, { payload }) => {
            state.users = payload;
          },
    }
})

export const { addUsers } = usersSlice.actions;
export default usersSlice.reducer;