import { createStore } from "redux"

const reducerFunction = (state = { counter: 0 }, action) => {
  if (action.type === "increment")
    return {
      counter: state.counter + 1,
    }
  if (action.type === "increment5")
    return {
      counter: state.counter + 5,
    }
  if (action.type === "decrement5")
    return {
      counter: state.counter - 5,
    }
  return state
}
const store = createStore(reducerFunction)

export default store
