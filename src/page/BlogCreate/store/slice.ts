import { createSlice } from "@reduxjs/toolkit";

interface ISliceState {
  blogCreate: {
    data: {
      title: string;
      type: string;
      description: string;
    };
  };
}

export const initialState: ISliceState = {
  blogCreate: {
    data: {
      title: "",
      type: "",
      description: "",
    },
  },
};

const blogCreateSlice = createSlice({
  name: "blogCreate",
  initialState,
  reducers: {
    setBlogCreateState: (state, action) => {},
    fetchBlogCreateAction: (state, action) => {
      state.blogCreate = { ...action.payload };
    },
  },
});

export const { setBlogCreateState, fetchBlogCreateAction } =
  blogCreateSlice.actions;

export default blogCreateSlice.reducer;
