import classes from "./Header.module.css"
import { useSelector, useDispatch } from "react-redux"
import { authActions } from "./store"
const Header = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
  const logoutHandler = () => {
    dispatch(authActions.handleLogout())
  }
  const dispatch = useDispatch()
  return (
    <header className={classes.header}>
      <h1 className=" text-3xl">Redux Auth</h1>
      {isLoggedIn && (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}

export default Header
