import React from 'react'
import { useState } from 'react'
import { adduser } from './UserReducer';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const [name, setName] = useState(' ');
  const [email, setEmail] = useState('');
  const users = useSelector((state) => state.users)
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const handlsubmit = (event) => {
    event.preventDefault();
    const newUserId = users.length > 0 ? users[users.length - 1].id + 1 : 1; // Handle empty users array
    const newUser = {
      id: newUserId,
      name: name,
      email: email
    };
    dispatch(adduser(newUser));
    navigate('/')
  }
  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className='w-50 border bg-secondary text-white p-5'>
        <h3>Add New User</h3>
        <form onSubmit={handlsubmit}>
          <div>
            <label htmlFor='name'>Name: </label>
            <input type='text' name='name' required className='form-control' placeholder='enter name' onChange={(e) => setName(e.target.value)}></input>
          </div>
          <div>
            <label htmlFor='email'>Email: </label>
            <input type='email' name='email' required className='form-control' placeholder='enter email' onChange={(e) => setEmail(e.target.value)}></input>
          </div>
          <button type='submit' className='btn btn-primary m-1'>Submit</button>
        </form>
      </div>

    </div>
  )
}

export default Create;
