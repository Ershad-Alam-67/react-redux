import { createSlice, configureStore } from "@reduxjs/toolkit"
const initialCounterState = {
  counter: 0,
  tougle: true,
}
const counterSlice = createSlice({
  name: "counterSlice",
  initialState: initialCounterState,
  reducers: {
    increment: (state, action) => {
      state.counter = state.counter + action.payload
    },
    decrement: (state, action) => {
      state.counter = state.counter - action.payload
    },
    tougle: (state, actions) => {
      state.tougle = !state.tougle
    },
  },
})
const initialAuthState = {
  isLoggedIn: false,
}
const authSlice = createSlice({
  name: "authSlice",
  initialState: initialAuthState,
  reducers: {
    handleLogin: (state) => {
      state.isLoggedIn = true
    },
    handleLogout: (state) => {
      state.isLoggedIn = false
    },
  },
})
export const counterActions = counterSlice.actions
export const authActions = authSlice.actions
const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
})

export default store
