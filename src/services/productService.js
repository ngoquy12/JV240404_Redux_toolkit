import { createAsyncThunk } from "@reduxjs/toolkit";
import BASE_URL from "../api/instance";

export const findAllProduct = createAsyncThunk(
  "product/findAllProduct",
  async () => {
    console.log("vào");

    const response = await BASE_URL.get("/products");

    console.log("response: ", response);

    return response.data;
  }
);
