import { useLocation,useNavigate } from "react-router"
import {  NavBar,List } from 'antd-mobile'
import api from "../Common/api"
import { useEffect, useState } from 'react'
const DetailView = () => {
  
  const location =  useLocation()
  const { state:{ params } } = location
  console.log(params)
  const [subjectList,setSubject] = useState([{
    subject:'',
    lowestScoreLine:0
  }])
  useEffect(()=>{
    api.getSubjectListByName(params)
    .then(res=>{
      const {code,data,msg} = res.data
      if(code == 0){
        setSubject(data)
      }
    })
  },[])
  const navigate = useNavigate()
  const back = () => {
    navigate(-1)
  }
  return (
    <div>
      <NavBar onBack={back}>{params.name}</NavBar>
      <List>
        {
          subjectList.map((item,idx)=>{
           return (
            <List.Item key={idx}>
            {item.subject}({item.lowestScoreLine})
            </List.Item>
           )
          })
        }
      </List>
    </div>
  )
}
export default DetailView