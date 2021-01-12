import React from 'react';
import styled from 'styled-components'


const TaskContainer = styled.div`
  margin-bottom:30px;
  box-shadow:0px 1px 12px 0px rgba(0,0,0,0.5);
`
const TaskHeader = styled.div`

`
const TaskBody = styled.div`

`


const Tasks =({task})=>{

  return(
    <TaskContainer>
      <TaskHeader>
        <div>{task.title}</div>
      </TaskHeader>

      <TaskBody>{task.description}</TaskBody>
    </TaskContainer>
  )
}

export default Tasks
