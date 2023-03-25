import { useState } from 'react'
import './App.css'
import { TabBar } from 'antd-mobile'
function App() {
  const tabs = [
    {
      title:'首页',
      path:'/',
    },
    {
      title:'可选专业',
      path:'/major',
    },
    {
      title:'学校',
      path:'/un',
    },
  ]
  const clickToRoute = (path:string) =>{
    // history.push(path)
  }
  return (
    <div className="App">
      <TabBar onChange={clickToRoute}>
        {tabs.map(item => (
          <TabBar.Item key={item.path}  title={item.title}  />
        ))}
      </TabBar>
    </div>
  )
}

export default App
