import React from 'react';
import styled from 'styled-components'
import Input from '../Input/Input'
import Button from '../Button/Button'


const Form = styled.form`
background: #10AdED;
    border-radius: 16px;
    padding: 20px;
    width: 200px;


`



const formContainer = (props)=>{
  return(
  <Form onSubmit={props.submit}>
    <Input placeholder={'e-mail'} type={'text'}/>
    <Input placeholder={'password'} type={'password'}/>
    <Button label={'Login'} showForm ={props.showForm}/>
  </Form>
  )
}

export default formContainer
