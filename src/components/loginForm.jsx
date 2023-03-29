import React from 'react'
import Joi from "joi-browser"
import Input from './common/input'
import Form from './common/form'
class login extends Form {
    constructor(props) {
      super(props)
    
      this.state = {
         data : {username : "" , password : ""},
         errors : {}
      }
    }

    schema = {
        username : Joi.string().required().label("Username"),
        password : Joi.string().required().label("Password")
    }

    doSubmit = () =>{
        //call the server
        console.log("submitted")
    }
  render() {
    const {data, errors} = this.state;
    return (
        <div className='container'>
        <h1>Login Form</h1>
        <form onSubmit={this.handleSubmit}>
            <Input
            name="username"
            label= "Username"
            value={data.username}
            onChange={this.handleChange}
            type="text"
            error={errors.username}
            />
            <Input
            name="password"
            label= "Password"
            value={data.password}
            onChange={this.handleChange}
            type="password"
            error={errors.password}
            />
            {this.renderButton("Login")}
        </form>
    </div>
    )
  }
}

export default login