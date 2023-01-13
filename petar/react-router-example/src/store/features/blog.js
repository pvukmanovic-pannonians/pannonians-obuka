import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  comments: {},
  users: [],
};

export const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    addPosts: (state, { payload }) => {
      state.posts = payload;
    },
    addComments: (state, { payload }) => {
      state.comments = payload.reduce((acc, comment) => {
        if (acc[comment.postId]) {
          acc[comment.postId] = [...acc[comment.postId], comment];
          return acc;
        }
        acc[comment.postId] = [comment];
        return acc;
      }, {});
    },
    addUsers: (state, { payload }) => {
      state.users = payload;
    },
  },
});

export const { addPosts, addComments, addUsers } = blogSlice.actions;

export default blogSlice.reducer;
