import { ErrorBlock, NavBar } from 'antd-mobile'
import { useNavigate } from 'react-router'
const ErrorElement = () =>{
  const AppNavBar = () => {
    const navigate = useNavigate()
    const back = () => {
      navigate(-1)
    }
    return (
      <NavBar onBack={back}>错误</NavBar>
    )
  }
 return (
  <div>
    <AppNavBar />
    <ErrorBlock status='empty'  />
  </div>

 )
}
export default ErrorElement