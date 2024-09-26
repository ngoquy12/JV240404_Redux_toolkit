import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    // Hàm tự định nghĩa => Đại diện cho một action
    increment: (state) => {
      return (state += 1);
    },

    decrement: (state) => {
      return (state -= 1);
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
