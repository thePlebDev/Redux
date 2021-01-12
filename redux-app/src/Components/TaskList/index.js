import React from 'react';
import styled from 'styled-components'

import Task from '../Tasks'

const Container = styled.div`

`

const TaskListTitle = styled.div`

`


const TaskList = ({status,tasks})=>{

  return(

    <Container>
        <TaskListTitle>{status}</TaskListTitle>
        {
          tasks.map(item =>{
            return <Task key={item.id} task={item} />
          })
        }

    </Container>
  )

}

export default TaskList
