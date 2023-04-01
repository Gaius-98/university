import styled from "styled-components"
import { List } from "antd-mobile"
import { AddCircleOutline, CloseOutline } from 'antd-mobile-icons'
import { useState } from "react"
import {v4 as uuidV4} from 'uuid'
import { cloneDeep } from 'lodash'
const HomeView = () =>{
  const [todoList,setList] = useState([
    {
      text:'高考',
      key:uuidV4()
    },{
      text:'测试',
      key:uuidV4()
    },{
      text:'拿快递',
      key:uuidV4()
    }
  ])
  const MainTitle = styled.div`
  display:flex;
  justify-content:space-around;
  align-items:center;
  font-size:20px;
  margin-bottom:10px;
  `
  const TodoUl = styled.ul`
  list-style:none;
  `
  const TodoItem = styled.li`
  display:flex;
  justify-content:space-between;
  align-items:center;
  border-bottom:1px solid #eee;
  padding:0 10px;
  `
  const TodoText = styled.div`
  font-size:20px;
  padding:5px 10px;
  `
  const onCloseItem = (key:string) =>{
    let idx = todoList.findIndex(e=>(e.key == key)) 
    const list = cloneDeep(todoList)
    list.splice(idx,1)
    setList(list)
  }
  return (
    <div>
      <MainTitle>
        <div>
        重要事件
        </div>
        <div>
          <AddCircleOutline />
        </div>
      </MainTitle>
      <TodoUl >
        {
          todoList.map((e,idx)=>{
            return (
              <TodoItem>
                <TodoText>
                  {idx+1}.{e.text}
                </TodoText>
                <div onClick={()=>{onCloseItem(e.key)}}>
                  <CloseOutline />
                </div>
              </TodoItem>
            )
          })
        }
      </TodoUl>
      <div className="major">
      </div>
    </div>
  )
}

export default HomeView