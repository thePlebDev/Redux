import React,{useState} from 'react';
import styled from 'styled-components';

import TaskList from '../TaskList'

const TASK_STATUSES =['Unstarted', 'In Progress', 'Completed'];

const Container = styled.div`

`
const TaskLists = styled.div`

`



const TasksPage = ({tasks})=>{

  const renderTaskLists=()=>{
    return TASK_STATUSES.map(status =>{
      const statusTasks = tasks.filter(task =>task.status === status);
      return <TaskList key={status} status={status} tasks={statusTasks} />
    })
  }
  return(
    <Container>
      <TaskLists>{renderTaskLists()}</TaskLists>
    </Container>
  )

}

export default TasksPage
