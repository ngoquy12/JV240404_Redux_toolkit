import { createSlice } from "@reduxjs/toolkit";
import { findAllProduct } from "../../services/productService";

const initialValue = {
  status: "idle",
  data: [],
  error: null,
};

const productSlice = createSlice({
  name: "product",
  initialState: initialValue,

  reducers: {},
  extraReducers: (builder) => {
    // Thời điểm tải dữ liệu => Chưa có dữ liệu
    builder
      .addCase(findAllProduct.pending, (state, action) => {
        state.status = "pending";
      })

      // Thời điểm đã có dữ liệu
      .addCase(findAllProduct.fulfilled, (state, action) => {
        state.status = "successfully";
        state.data = action.payload;
      })

      // Thời điểm bắt lỗi
      .addCase(findAllProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;
