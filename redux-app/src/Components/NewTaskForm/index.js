import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import useForm from '../../Hooks/useForm';
import TextInput from '../TextInput'

const Container = styled.form`
  border:1px solid blue;
  width:60%;
  margin:0 auto;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
`

const Input = styled.input`
  width:80%;
  margin:10px auto;
  padding:10px;
  font-size:1.2em;
`

const Button = styled.button`
  padding:5px 30px;
  border-radius:4px;
  background-color:blue;
  color:white;
  margin:10px;
  border:none;
  outline:none;
  cursor:pointer;
  opacity:0.8;
  transition:all 0.35s;

  &:hover{
    opacity:1;
  }
`




const NewTaskForm =({taskCreation})=>{
  console.log('create task is below')
  console.log(taskCreation)

  const {state,handleChange,handleSubmit} = useForm()


  return(
    <Container onSubmit={(e)=>{handleSubmit(e)}}>

      <TextInput title={'title'} handleChange={handleChange} value={state.title}/>
      <TextInput title={'description'} handleChange={handleChange} value={state.description}/>

      <Button type="submit">Save</Button>
    </Container>
  )
}

export default NewTaskForm
