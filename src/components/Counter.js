import classes from "./Counter.module.css"
import { useSelector, useDispatch } from "react-redux"
import { counterActions } from "./store/index.js"

const Counter = () => {
  const dispatch = useDispatch()
  function increment() {
    dispatch(counterActions.increment(5))
  }
  function decrement() {
    dispatch(counterActions.decrement(5))
  }
  function tougle() {
    dispatch(counterActions.tougle())
  }
  const counter = useSelector((state) => state.counter.counter)
  const showCounter = useSelector((state) => state.counter.tougle)
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <button
        onClick={increment}
        className=" hover:bg-blue-600 m-1 bg-blue-700 p-6 py-2 text-white rounded-md"
      >
        increment
      </button>
      <button
        onClick={decrement}
        className=" hover:bg-blue-600 m-1 bg-blue-700 p-6 py-2 text-white rounded-md"
      >
        decrement
      </button>
      <button
        onClick={tougle}
        className=" hover:bg-blue-600 m-1 bg-blue-700 p-6 py-2 text-white rounded-md"
      >
        tougle
      </button>
    </main>
  )
}

export default Counter
