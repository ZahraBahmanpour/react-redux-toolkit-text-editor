import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  loading: false,
  error: "",
};

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  return fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .catch((error) => error.message);
});

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => {
      return { ...state, loading: true };
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      return { ...state, loading: false, posts: action.payload };
    });
    builder.addCase(fetchPosts.rejected, (state, action) => {
      return { posts: [], loading: false, error: action.payload };
    });
  },
});

export default postsSlice.reducer;
