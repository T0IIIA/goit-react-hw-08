import { useSelector } from "react-redux"
import { selectLoggedIn } from "../redux/auth/selectors"
import { Navigate, useLocation } from "react-router-dom"

const RestrictedRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectLoggedIn)
  const location = useLocation()

  if (isLoggedIn) {
    return <Navigate to={location?.state ?? '/'} />
  }
  return children
}

export default RestrictedRoute