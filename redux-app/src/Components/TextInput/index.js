import React from 'react';
import styled from 'styled-components'

const Input = styled.input`
  width:80%;
  margin:10px auto;
  padding:10px;
  font-size:1.2em;
`

const TextInput =({value,handleChange,title})=>{
  return(
    <>
    <label htmlFor={title}></label>
    <Input id={title} name={title} type='text' placeholder={title} value={value} onChange={(e)=>handleChange(e)}/>
    </>
  )
}

export default TextInput
