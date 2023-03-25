
import {
  createBrowserRouter,
} from "react-router-dom";
import HomeView from "../views/home";
import App from "../App";
const routes = createBrowserRouter([
  {
    path:'/',
    element:App(),
    children:[
      {
        path:'home',
        element:HomeView()
      },
    ],
    
  }
])
export default routes