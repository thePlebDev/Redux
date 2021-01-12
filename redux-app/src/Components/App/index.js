import React from 'react';
import styled from 'styled-components';

import TasksPage from '../TaskPage'


const MockTasks = [
  {
    id:1,
    title:'learn Redux',
    description:'the store,actions and reducers, oh my!',
    status:'In Progress'
  },
  {
    id:2,
    title:'Peace on Earth',
    description:'No big deal',
    status:'In Progress'
  },

]


const App =()=>{

  return(
    <div>
      <TasksPage tasks={MockTasks}/>
    </div>
  )
}

export default App
