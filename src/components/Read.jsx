import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';


function Read() {
  const[data,setdata]=useState([]);
  const {id}=useParams();
  useEffect(()=>{
    axios.get('http://localhost:3000/users/'+id)
    .then(res=>setdata(res.data))
    .catch(err=>console.log(err));
  },[])
  return (
    <div className='d-flex justify-content-center alignt-items-center bg-light w-100 vh-100'>
      <div className='w-50 border bg-white shadow px-3 pt-5 rounded'>
        <h3 className='font-bold'>Detail of user</h3>
        <div className='mb-2 mt-3'>
          <strong>Name :{data.name}</strong>
        </div>
        <div className='mb-2'>
          <strong>Email :{data.email}</strong>
        </div>
        <div className='mb-2'>
          <strong>Phone :{data.phone}</strong>
        </div>
        <Link to={`/update/${id}`}className='btn btn-success ms-3'>Edit</Link>
        <Link to='/' className='btn btn-primary ms-3'>Back</Link>
        </div>
        </div>
  )
}

export default Read

