import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'



function Create() {
  const [values,setvalues]=useState({
    name:'',
    email:'',
    phone:''
  })
  const navigate=useNavigate();

  const handlesubmit =(event)=>{
    event.preventDefault();
    axios.post('http://localhost:3000/users',values)
    .then(res=>{
      console.log(res);
      navigate('/')
    })

    .catch(err=>console.log(err))
  }
  return (
    <div className='d-flex justify-content-center alignt-items-center bg-light w-100 vh-100'>
      <div className='w-50 border bg-white shadow px-3 pt-5 rounded'>
        <h1 className='font-bold'>Add A User</h1>
        <form onSubmit={handlesubmit}>
          <div className='mb-2 mt-2'>
            <label htmlFor='name'>Name </label>
            <input type="text" name='name' className='form-control' placeholder='Enter Your Name'
            onChange={e=>setvalues({...values,name:e.target.value})}
            />
          </div>
          <div className='mb-2'>
            <label htmlFor='name'>Email </label>
            <input type="email" name='email' className='form-control' placeholder='Enter Your Email'
            onChange={e=>setvalues({...values,email:e.target.value})}
            />
          </div>
          <div className='mb-2'>
            <label htmlFor='name'>Phone </label>
            <input type="text" name='phone' className='form-control' placeholder='Enter Your Phone'
            onChange={e=>setvalues({...values,phone:e.target.value})}
            
            />
          </div>
          <button className='btn btn-success'>Submit</button>
          <Link to='/' className='btn btn-primary ms-3'>Back</Link>
        </form>

      </div>
     
    </div>
  )
}

export default Create
