
import {
  createBrowserRouter,
  Navigate,
} from "react-router-dom";
import HomeView from "../views/Home/home";
import App from "../App";
import ErrorElement from "../components/ErrorElement/ErrorElement";
const routes = createBrowserRouter([
  {
    path:'/',
    element:<App></App>,
    errorElement:<ErrorElement/>,
    children:[
      {
        index:true,
        element:<Navigate to={'/home'} replace></Navigate>
      },
      {
        path:'/home',
        element:<HomeView></HomeView>,
      }
    ]
  },
])
export default routes