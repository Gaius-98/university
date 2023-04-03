import { SearchBar, SideBar,List  } from 'antd-mobile'
import styled from 'styled-components'
import { useState } from "react"
import un from '../../assets/un'
const SearchComp = () => {
  return (
    <SearchBar placeholder='请输入内容' />
  )
}
const Container = () =>{
  
  const [list,setList] = useState(un)
  const [active,setActive] = useState(un[0].key)
  const [activeList,setActiveList] = useState(un[0].children)
  console.log(activeList)
  const SideContainer = styled.div`
  display:flex;

  `
  const Container = styled.div`
  flex:1;
  `
  const onChangeTab = (key:string) => {
    setActive(key)
    findActiveList(key)
  }
  const findActiveList = (key:string) =>{
    const cur = un.find(e=>{
      return e.key == key
    }) 
    if(cur){
      setActiveList(cur.children)
    }
  }
  return (
    <SideContainer>
    <SideBar activeKey={active} onChange={onChangeTab}>
      {list.map(item => (
        <SideBar.Item key={item.key} title={item.name} />
      ))}
    </SideBar>
    <Container>
      <List>
        {
          activeList.map(item=>(
            <List.Item>{item}</List.Item>
          ))
        }
      </List>
    </Container>
    </SideContainer>
    
    
  )
}
const CommonView = ()=>{

  return (
    <div>
      <SearchComp></SearchComp>
      <div className="container">
      <Container></Container>
      </div>
    </div>
  )
}
export default CommonView