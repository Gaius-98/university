import { useState } from 'react'
import { Routes, Route,useNavigate,RouterProvider,Outlet} from "react-router-dom";
import {TabBar,NavBar} from 'antd-mobile'
import {v4 as uuidV4} from 'uuid'
import {
  AppstoreOutline,
  UnorderedListOutline,
  UserOutline,
} from 'antd-mobile-icons'
import styled from 'styled-components';

function App() {
  const AppTabBar = ()=>{
    
    const navigate = useNavigate()
    const tabs = [
        {
          key:'home',
          title:'首页',
          icon:<AppstoreOutline/>,
          path:'/home'
        },
        {
          key:'common',
          title:'学校',
          icon:<UnorderedListOutline/>,
          path:'/common'
        },
        {
          key:'mine',
          title:'我的',
          icon:<UserOutline/>,
          path:'/mine'
        }
    ]
    const [activeKey,setActiveKey] = useState(
      tabs[0].key
    )
    const onChangeRoute = (key:string)=>{
      setActiveKey(key)
     const res =  tabs.find(e=>(e.key == key))
      if(res){
        navigate(res.path)
      }
    }
    return (
      <TabBar 
      onChange={onChangeRoute} 
      activeKey={activeKey}
      style={{
        position:'fixed',
        bottom:'0px',
        left:'0px',
        width:'100%',
        background:'#fffffe'
      }}  >
        {tabs.map(item => (
          <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
        ))}
      </TabBar>
    )
  }
  const LayoutContainer = styled.div`
    height:100vh;
    padding:10px;
  `
  return (
    <div className="App">
        <LayoutContainer >
        <Outlet></Outlet>
        </LayoutContainer>
        <AppTabBar></AppTabBar>
    </div>
  )
}

export default App
