import { createSlice, configureStore } from "@reduxjs/toolkit";

let counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },

  //! the reducer is where we puts the Actions
  reducers: {
    addBtn: (state) => {
      state.value += 1;
    },
  },
});

let hombreSlice = createSlice({
  name: "hombre",
  initialState: {
    name: null,
    food: [],
  },
  reducers: {
    getData: (state, action) => {
      return { ...state,
         name: action.payload.name,
         food: [...state.food,...action.payload.food]  //concat the new food to the existing food array.
 
       };
    },

    removeData: (state, payload) => {},
  },
});

export let { addBtn } = counterSlice.actions;

let store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    hombre: hombreSlice.reducer,
  },
});

export default store;
