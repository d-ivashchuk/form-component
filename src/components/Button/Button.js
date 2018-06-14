import React from 'react';
import styled from 'styled-components'

const Btn = styled.button`
align-items: center;
    background: ${props=> props.secondary ? '#10aded' : '#BADA55'};
    border: 0;
    border-radius: 3px;
    color: white;
    display: flex;

    font-size: 13px;
    font-weight: 500;
    justify-content: center;
    margin-top: 20px;
    outline: none;
    padding: 10px 9px 10px 11px;
    text-transform: uppercase;
    width: 100%;
    cursor:pointer;
    &:hover {
		transform: scale(1.02);
	}
`


const button =(props)=>{
  return(
<Btn secondary ={props.secondary} onClick={props.showForm} >{props.label}</Btn>
  )
}

export default button
