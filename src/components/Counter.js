import classes from "./Counter.module.css"
import { useSelector, useDispatch } from "react-redux"
import store from "./store"

const Counter = () => {
  const dispatch = useDispatch()
  const toggleCounterHandler = (actionType) => {
    if (actionType === "increment") {
      dispatch({ type: "increment" })
    }
    if (actionType === "increment5") {
      dispatch({ type: "increment5" })
    }
    if (actionType === "decrement5") {
      dispatch({ type: "decrement5" })
    }
  }
  const counter = useSelector((state) => state.counter)

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button
        onClick={() => toggleCounterHandler("decrement5")}
        className=" hover:bg-blue-600 m-1 bg-blue-700 p-6 py-2 text-white rounded-md"
      >
        Decrement5
      </button>
      <button
        onClick={() => toggleCounterHandler("increment")}
        className=" hover:bg-blue-600 m-1 bg-blue-700 p-6 py-2 text-white rounded-md"
      >
        Toggle Counter
      </button>
      <button
        onClick={() => toggleCounterHandler("increment5")}
        className=" hover:bg-blue-600 m-1 bg-blue-700 p-6 py-2 text-white rounded-md"
      >
        Increment5
      </button>
    </main>
  )
}

export default Counter
