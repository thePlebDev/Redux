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


const App =({tasks,onCreateTask})=>{
  

  return(
    <div>
      <TasksPage tasks={tasks}/>
      <NewTaskForm taskCreation={onCreateTask}/>

    </div>
  )
}
const onCreateTask =(dispatch,title,description) =>{
  dispatch({
    type:'CREATE_TASK',
    payload:{
      title,
      description
    }
  })
}
const mapDispatchToProps={
  onCreateTask
}

function mapStateToProps(state){
  return{
    tasks:state.tasks
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)
