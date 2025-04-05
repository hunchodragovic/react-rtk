import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"; // Importing axios
// ✅ Initial state should include users, loading, and error
const initialState = {
  users: [],
  loading: false,
  error: "",
};

// ✅ createAsyncThunk using axios instead of fetch (since you're importing axios)
export const fetchUsers = createAsyncThunk("users/fetchUsers", async (_, thunkAPI) => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return response.data;
});

// ✅ createSlice
const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer; // Exporting the reducer
