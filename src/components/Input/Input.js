import React from 'react';
import styled from 'styled-components'


const Input = styled.input`
display: flex;
   flex-direction: row-reverse;
  background:transparent;
  border:none;
   border-bottom: 1px solid rgba(255, 252, 232, 0.1);
   padding-bottom: 2px;
   margin-bottom: 5px;
   outline: none;
   color:white;
   width:100%;


   flex: 1 0 auto;
   font-size: 15px;
   font-weight: 300;
   ::placeholder{
     color:#E0e0e0;
   }
`

const input = (props)=>{
return(
  <Input placeholder={props.placeholder} required type ={props.type}/>
)
}

export default input
