import { useLocation,useNavigate } from "react-router"
import {  NavBar } from 'antd-mobile'
interface NavU {
  university:string
}
const AppNavBar = (props:NavU) => {
  const { university } = props
  const navigate = useNavigate()
  const back = () => {
    navigate(-1)
  }
  return (
    <NavBar onBack={back}>{university}</NavBar>
  )
}
const DetailView = () => {
  
  const location =  useLocation()
  const { state } = location
  console.log(state)
  return (
    <div>
      <AppNavBar university={decodeURI(state.params)}>

      </AppNavBar>
      { decodeURI(state.params) }
    </div>
  )
}
export default DetailView