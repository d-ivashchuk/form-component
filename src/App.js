import React, { Component } from 'react';
import {injectGlobal} from 'styled-components'
import FormContainer from './components/FormContainer/FormContainer.js'
import Button from './components/Button/Button.js'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


injectGlobal`
.example-appear {
  margin-top:30px
  opacity: 0.01;
}

.example-appear.example-appear-active {
  margin-top:0px;
  opacity: 1;
  transition: opacity .5s ease-in,margin .5s ease-in;
}
.example-enter {
    margin-top: 30px;
    opacity: .01;

    &.example-enter-active {
        margin-top: 0px;
        opacity: 1;
        transition: opacity .5s ease, margin .5s ease;
    }
}

.example-leave {
    margin-top: 0px;
    opacity: 1;

    &.example-leave-active {
        margin-top: -30px;
        opacity: .01;
        transition: opacity .3s ease, margin .5s ease;
    }
}


body{
@import 'https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900';
font-family:'Lato', sans-serif;
background-image: url(https://source.unsplash.com/QmsKTdZnxMw/1600x900);
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	height: 100vh;
	overflow: hidden;
  }
}
`

class App extends Component {
state={
  submitted:false
}

submitHandler = e =>{
e.preventDefault()
  this.setState({submitted:true})
}
showFormHandler = ()=>{

this.setState({submitted:false})
}
  render() {

    return (
      <div className='App'>
        <div>

          <ReactCSSTransitionGroup
            transitionName='example'
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}
            transitionAppear = {true}
            transitionAppearTimeout = {500}
            >
            {!this.state.submitted
              ? (<FormContainer key={'askhjd'} isSubmitted = {this.state.submitted} submit={this.submitHandler}/>)
              : (<Button key={'123'}   secondary label={'Show form again!'} showForm={this.showFormHandler}/>)
            }
          </ReactCSSTransitionGroup>

        </div>

      </div>
    );
  }
}

export default App;
