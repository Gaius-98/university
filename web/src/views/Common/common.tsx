import { SearchBar, SideBar,List  } from 'antd-mobile'
import styled from 'styled-components'
import { useState,useEffect} from "react"
import un from '../../assets/un'
import api from './api'
import { useNavigate } from 'react-router'
const SearchComp = () => {
  return (
    <SearchBar placeholder='请输入内容' />
  )
}
const Container = () =>{
  const [params,setParms] = useState({
    name:'',
    lowestScoreLine:''
  })
  const [unParams,setUnParams] = useState({
    name:'',
    lowestScoreLine:'',
    provinceId:0
  })
  const [list,setList] = useState([
    {
      provinceId:0,
      province:''
    }
  ])
  const [active,setActive] = useState(list[0].provinceId)
  const [activeList,setActiveList] = useState([{
    name:'1'
  }])
  useEffect(()=>{
    api.getProvinceList(params).then(res=>{
      const {code,data,msg} =  res.data
      if(code == 0){
        setList(data)
        setUnParams({
          ...unParams,
          provinceId:data[0].provinceId
        })
        setActive(data[0].provinceId.toString())
      }
    })
  },[])
  
  
  const navigate = useNavigate()
  const SideContainer = styled.div`
  display:flex;
  padding:10px;
  `
  const Container = styled.div`
  flex:1;
  `
  const onChangeTab = (key:string) => {
    setActive(Number(key))
    setUnParams({
      ...unParams,
      provinceId:Number(key)
    })
  }
  useEffect(() => {
    api.getUniversityListByProvince(unParams).then(res=>{
      const {code,data,msg} =  res.data
      if(code == 0){
        setActiveList(data)
      }
    })
  },[unParams])
  const onGoPath = (item:any) =>{
    navigate(`/detail`,{
      state:{
        params:item
      }
    })
  }
  return (
    <SideContainer>
    <SideBar activeKey={active.toString()} onChange={onChangeTab}>
      {list.map(item => (
        <SideBar.Item key={item.provinceId.toString()} title={item.province} />
      ))}
    </SideBar>
    <Container>
      <List>
        {
          activeList.map(item=>(
            <List.Item onClick={()=>{onGoPath(item)}}>{item.name}</List.Item>
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