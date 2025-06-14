import { createSelector, createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {},
  reducers: {
    addToCart: (state, { payload }) => {
      state[payload] = (state[payload] || 0) + 1;
    },
    removeFromCart: (state, { payload }) => {
      if (!state) {
        return;
      }

      state[payload] = state[payload] - 1;

      if (state[payload] === 0) {
        delete state[payload];
      }
    },
  },
  selectors: {
    selectItemAmountById: (state, id) => {
      return state[id] || 0;
    },
  },
});

const selectcartSlice = (state) => state[cartSlice.name];

export const selectCartItems = createSelector(
  [selectcartSlice],
  (cartSlice) => {
    return Object.keys(cartSlice).reduce((acc, id) => {
      acc.push({ id, amount: cartSlice[id] });

      return acc;
    }, []);
  }
);

export const { addToCart, removeFromCart } = cartSlice.actions;
export const { selectItemAmountById } = cartSlice.selectors;
