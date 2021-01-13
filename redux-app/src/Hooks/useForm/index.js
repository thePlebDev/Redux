import {useState} from 'react';



const useForm = ()=>{
  const [state,setState] = useState({title:'',description:''})

  const handleSubmit =(e)=>{
    e.preventDefault()
    console.log('we have submitted')
    console.log(state)
  }

  const handleChange =(e)=>{
    const {name,value} = e.target
    setState({...state,[name]:value})
  }

  return{
    state,
    handleChange,
    handleSubmit
  }
}

export default useForm
