import React from 'react'
import Input from './common/input'
import Joi from 'joi-browser'
import Form from './common/form'

class Registration extends Form {
    constructor(props) {
      super(props)
      
      this.state = {
         data : {email : "" , password : "", username : ""},
         errors : {}
      }
    }

    schema = {
         email : Joi.string()
         .required()
         .label("Email")
         .email(),
         password : Joi.string()
         .required()
         .label("Password")
         .min(5),
         username : Joi.string()
         .required()
         .label("Username")
    }
    // validate = () =>{
    //     const result = Joi.validate(this.state.data, this.schema, {abortEarly: false })
    //     // console.log(result)
    //     if(!result.error) return null;

    //     const errors = {};
    //     for(let item of result.error.details) errors[item.path[0]] = item.message;
    //     return errors;

    //     // const errors = {}

    //     // if(this.state.data.email.trim() ==="")
    //     //     errors.email = "Email is required";
    //     // if(this.state.data.password.trim() ==="")
    //     //     errors.password = "Password is required";
    //     // if(this.state.data.username.trim() ==="")
    //     //     errors.username = "Username is required";
        
    //     // return Object.keys(errors).length === 0 ? null : errors
    // }
    // handleSubmit = (e) =>{
    //     e.preventDefault();

    //     const errors = this.validate();
    //     // console.log(errors)
    //     this.setState({errors : errors || {}})
    //     if(errors) return;
    // }
    doSubmit = () =>{
         //call ther server
        console.log("submitted")
    }
    // validateProperty = ({name, value}) =>{
    //     const obj = {[name] : value}
    //     const schema = {[name] : this.schema[name]};
    //     const {error} = Joi.validate(obj, schema)
    //     return error ?  error.details[0].message : null;
    //     // if(input.name === "email"){
    //     //     if(input.value.trim() ==="") return "Email is required ok?";
    //     // }
    //     // if(input.name === "password"){
    //     //     if(input.value.trim()==="") return "Password is required ok?";
    //     // }
    //     // if(input.name === "username"){
    //     //     if(input.value.trim()==="") return "Username is required ok?";
    //     // }
    // } 
    // handleChange = ({currentTarget : input}) =>{
    //     const errors = {...this.state.errors}
    //     const errorMessage = this.validateProperty(input);
    //     if(errorMessage) errors[input.name] = errorMessage
    //     else delete errors[input.name]

    //     const data = {...this.state.data}
    //     data[input.name] = input.value;
    //     this.setState({data, errors})
    // }
  render() {
    const {data,errors} = this.state;
    return (
      <div className='container'>
        <h1>Registration Form</h1>
        <form onSubmit={this.handleSubmit}>
            <Input
                name="email" 
                label="Email"
                type="email"
                value={data.email}
                onChange={this.handleChange}
                error={errors.email}/>
            <Input
                name="password" 
                label="Password"
                type="password"
                value={data.password}
                onChange={this.handleChange}
                error={errors.password}/>
            <Input
                name="username" 
                label="Username"
                type="text"
                value={data.username}
                onChange={this.handleChange}
                error={errors.username}/>
            {this.renderButton("Registration")}
        </form>
      </div>
    )
  }
}

export default Registration