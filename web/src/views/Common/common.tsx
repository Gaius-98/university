import { NavBar, SideBar,List,Popup,Form,Input,Tag} from 'antd-mobile'
import styled from 'styled-components'
import { useState,useEffect} from "react"
import api from './api'
import { useNavigate } from 'react-router'
import { FilterOutline } from 'antd-mobile-icons'
interface containerProps{
  params:{
    name:string,
    lowestScoreLine:string
  },
  setParams:Function
}
const SearchComp = (props:containerProps) => {
  const {params,setParams} = props
  const navigate = useNavigate()
  const back = () => {
    navigate(-1)
  }
  const RightOpt = () =>{
    const [visible,setVisible] = useState(false)
    const [name,setName] = useState('')
    const [lowestScoreLine,setLowestScoreLine] = useState<string>('')
    const onClickIcon = () =>{
      setVisible(!visible)
    }
    const setInputName = (val:string) =>{
      setName(val)
    }
    const setInputScore = (val:string) =>{
      setLowestScoreLine(val)
    }
    return (
      <div>
        <FilterOutline onClick={ onClickIcon }  style={{fontSize:'24px'}} />
        <Popup
          visible={visible}
          onMaskClick={() => {
            setVisible(false)
            setParams({
              name,
              lowestScoreLine
            })
          }}
          position='top'
        >
          <Form layout='horizontal' style={{padding:'10px'}}>
          <Form.Item label='大学名称' name='name'>
              <Input  value={params.name} placeholder='请输入大学名称' clearable  onChange={(e)=>{setInputName(e)}}/>
            </Form.Item>
            <Form.Item label='分数' name='lowestScoreLine'>
              <Input value={params.lowestScoreLine} placeholder='请输入最低分数' clearable type='number' onChange={(e)=>{setInputScore(e)}}/>
            </Form.Item>
          </Form>
        </Popup>
      </div>
    )
  }
  return (
    <NavBar onBack={back} right={ RightOpt() } >大学</NavBar>
  )
}

const Container = (props:containerProps) =>{
  const {params,setParams} = props
  const [list,setList] = useState([
    {
      provinceId:0,
      province:''
    }
  ])
  const [unParams,setUnParams] = useState({
    ...params,
    provinceId:0
  })
  const [active,setActive] = useState(list.length > 0 ? list[0]?.provinceId : '')
  const [activeList,setActiveList] = useState([{
    name:'1',
    remark:''
  }])
  useEffect(()=>{
    api.getProvinceList(params).then(res=>{
      const {code,data,msg} =  res.data
      if(code == 0){
        setList(data)
        setUnParams({
          ...params,
          provinceId: data.length > 0 ? data[0]?.provinceId : ''
        })
        setActive(data.length > 0 ? data[0]?.provinceId : '')
      }
    })
  },[params])
  const navigate = useNavigate()
  const SideContainer = styled.div`
  display:flex;
  padding:10px;
  `
  const ContainerFlex = styled.div`
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
        params:{
          ...item,
          lowestScoreLine:params.lowestScoreLine
        }
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
    <ContainerFlex>
      <List>
        {
          activeList.map((item,idx)=>(
            <List.Item onClick={()=>{onGoPath(item)}} key={idx}>
              <div style={{display:'flex',justifyContent:'flex-start',alignItems:'center'}}>
                <span>
                  {item.name}
                </span>
                <Tag round color='#2db7f5' style={{display:item.remark ? 'inline-block' :'none',marginLeft:'10px'}}>
                  {item.remark}
                </Tag>
              </div>
            </List.Item>
          ))
        }
      </List>
    </ContainerFlex>
    </SideContainer>
  )
}
const CommonView = ()=>{
  const [params,setParms] = useState({
    name:'',
    lowestScoreLine:''
  })
  return (
    <div>
      <SearchComp 
        params={params}
        setParams={setParms}
      ></SearchComp>
      <div className="container">
        <Container 
          params={params} 
          setParams={setParms}
        ></Container>
      </div>
    </div>
  )
}
export default CommonView