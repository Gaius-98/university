import styled from "styled-components"
import { useState } from "react"
import subject from "../../assets/subject"
import { Badge } from "antd-mobile"
const HomeView = () =>{
  const [majorList] = useState(subject.major)
  const [hotList] = useState(subject.hot)
  const randomColor = () =>{
    const color = new Array(6).fill('1').map(e=>{
      return parseInt(Math.random()*16 + '').toString(16)
    })
    return {
      color:`#${color.join('')}`,
      backgroundColor:`#${color.join('')}2f`
    }
  }
  const MainTitle = styled.div`
  display:flex;
  justify-content:space-around;
  align-items:center;
  font-size:20px;
  margin:10px 0;
  `
  const TodoUl = styled.ul`
  list-style:none;
  height:240px;
  overflow-y:auto;
  `
  const TodoItem = styled.li`
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:0 10px;
  margin-bottom:2px;
  
  `
  const TodoText = styled.div`
  width:calc(100% - 10px);
  font-size:20px;
  padding:5px 10px;
  border-radius:10px;
  `

  return (
    <div>
      <MainTitle>
        可报考专业
      </MainTitle>
      <TodoUl>
        {
          majorList.map((e,idx)=>{
            return (
              <TodoItem key={idx}>
                <TodoText style={{...randomColor()}}>
                  {idx+1}.{e}
                </TodoText>
              </TodoItem>
            )
          })
        }
      </TodoUl>
      <MainTitle>
      <Badge content='hot'>
        热门专业
      </Badge>
        
      </MainTitle>
      <TodoUl>
        {
          hotList.map((e,idx)=>{
            return (
              <TodoItem key={idx}>
                <TodoText style={{...randomColor()}}>
                  {idx+1}.{e}
                </TodoText>
              </TodoItem>
            )
          })
        }
      </TodoUl>
    </div>
  )
}

export default HomeView