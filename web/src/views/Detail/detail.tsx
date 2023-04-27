
import { List,DotLoading} from 'antd-mobile'
import api from "../Common/api"
import { useEffect, useState } from 'react'
interface params {
  params:{
    name:string,
    remark?:string,
    lowestScoreLine:string
  }
}
const DetailView = (props:params) => {
  const {params} = props
  const [loading,setLoading] = useState(true)
  const [subjectList,setSubject] = useState([{
    subject:'',
    lowestScoreLine:0
  }])
  useEffect(()=>{
    setLoading(true)
    api.getSubjectListByName(params)
    .then(res=>{
      const {code,data,msg} = res.data
      if(code == 0){
        setLoading(false)
        setSubject(data)
      }
    })
  },[params])
  return (
    loading ?(
     <DotLoading/>) :
    (<div>
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
    </div>)
  )
}
export default DetailView