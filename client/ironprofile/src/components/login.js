import React, { Component } from "react";
import Input from './Input';
import {  login  } from '../lib/Redux/actions';
import { AuthAPI } from "../lib/auth";
import { connect } from 'react-redux';



export class _Login extends Component {

  constructor(){
    super();
    this.state = {
        username:"",
        password:""
    }
}

handleLogin(){
    const {username, password} = this.state;
    const {dispatch} = this.props;
    AuthAPI.login(username, password)
    .then( user =>{
        dispatch(login(user))
    })
    .catch( e =>  e);
}

  
  render() {



    return (
      <div>

        <Input text="Nombre" onChange={e => this.setState({password:e.target.value})} />
        <Input text="Password" onChange={e => this.setState({username:e.target.value})}/>
        

        <button onClick={() => this.handleLogin()}>Login</button>
      </div>
    );
  }
}


export const Login = connect(store => store)(_Login);