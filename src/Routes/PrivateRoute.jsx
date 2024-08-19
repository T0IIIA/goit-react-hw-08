import { useSelector } from "react-redux"
import { selectLoggedIn } from "../redux/auth/selectors"


const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectLoggedIn)



  
  return children
}

export default PrivateRoute