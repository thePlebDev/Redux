import React,{useState} from 'react';
import styled from 'styled-components';

import TaskList from '../TaskList'

const TASK_STATUSES =['Unstarted', 'In Progress', 'Completed'];

const Container = styled.div`

`
const TaskListsContainer = styled.div`
  border:1px solid red;
  justify-content:center;
  display:flex;
  text-align:center;
`

const TasksPage = ({tasks})=>{

  const renderTaskLists=()=>{
    return TASK_STATUSES.map(status =>{

      const statusTasks = tasks.filter(task =>{return task.status === status});

      return <TaskList key={status} status={status} tasks={statusTasks} />
    })
  }
  return(
    <Container>
      <TaskListsContainer>{renderTaskLists()}</TaskListsContainer>
    </Container>
  )

}

export default TasksPage
