import React from 'react'

const Input = ({name, label,value,onChange,type, error}) =>{
  return (
    <div className='form-group mb-3'>
    <label htmlFor={name}>{label}</label>
    <input 
    autoFocus 
    className='form-control' 
    type={type} 
    id={name} 
    name={name}
    value={value} 
    onChange={onChange}></input>
    {error && <div className='alert alert-danger'>{error}</div>}
    </div>
  )
}

export default Input