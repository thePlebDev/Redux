
const mockTasks = [
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


const tasks =(state={tasks:mockTasks},action)=>{
  return state
}

export default tasks
