import React from 'react';
import styled from 'styled-components'


const TaskContainer = styled.div`

`
const TaskHeader = styled.div`

`
const TaskBody = styled.div`

`


const Tasks =({title,description})=>{

  return(
    <TaskContainer>
      <TaskHeader>
        <div>{title}</div>
      </TaskHeader>
      <hr/>
      <TaskBody>{description}</TaskBody>
    </TaskContainer>
  )
}

export default Tasks
