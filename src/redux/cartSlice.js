import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: []
  },
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload)
      // ✅ show toast only when successfully added
      // toast.success(`${item.name} added to cart`, { autoClose: 1500 });
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload)
    },
    clearCart: (state) => {
      state.items = []
    },
    increaseQty: (state, action) => {
      state.items.push(action.payload)
    },
    decreaseQty: (state, action) => {
      const idx = state.items.findIndex(item => item.id === action.payload)
      if (idx !== -1) {
        state.items.splice(idx, 1)
      }
    }
  }
})

export const { addToCart, removeFromCart, clearCart, increaseQty, decreaseQty } = cartSlice.actions
export default cartSlice.reducer