import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import TasksPage from '../TaskPage'
import NewTaskForm from '../NewTaskForm'


const MockTasks = [
  {
    id:1,
    title:'learn Redux and stuff',
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


const App =({tasks})=>{

  return(
    <div>
      <TasksPage tasks={tasks}/>
      <NewTaskForm/>

    </div>
  )
}
function mapStateToProps(state){
  return{
    tasks:state.tasks
  }
}

export default connect(mapStateToProps)(App)
