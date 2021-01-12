import React from 'react';
import styled from 'styled-components'

import Task from '../Tasks'

const Container = styled.div`
  width:20%;
`

const TaskListTitle = styled.div`
  margin-bottom:10px;
  margin-top:10px;
  border-bottom:1px solid red;
`


const TaskList = ({status,tasks})=>{
  //console.log(tasks)

  return(

    <Container>
        <TaskListTitle>{status} </TaskListTitle>
        {
          tasks.map(item =>{
            return <Task key={item.id} task={item} />
          })
        }

    </Container>
  )

}

export default TaskList
