
import {
  createBrowserRouter,
  Navigate,
} from "react-router-dom";
import HomeView from "../views/Home/home";
import App from "../App";
import ErrorElement from "../components/ErrorElement/ErrorElement";
import CommonView from "../views/Common/common";
import DetailView from "../views/Detail/detail";
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
      },{
        path:'/common',
        element:<CommonView></CommonView>
      },{
        path:'/detail',
        element:<DetailView></DetailView>
      }
    ]
  },
])
export default routes