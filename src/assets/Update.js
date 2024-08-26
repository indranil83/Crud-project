import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react';
import { updateUser } from './UserReducer';
import { useDispatch } from 'react-redux';

const Update = () => {
    const { id } = useParams();
    const users = useSelector((state) => state.users)
    const existingUser = users.filter(f => f.id == id);
    const { name, email } = existingUser[0];
    const [uname, setName] = useState(name);
    const [uemail, setEmail] = useState(email);
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const handleUpdate = (event) => {
        event.preventDefault();
        dispatch(updateUser({
            id: id,
            name: uname,
            email: uemail
        }));
        navigate('/');
    }
    return (
        <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
            <div className='w-50 border bg-secondary text-white p-5'>
                <h3>Update User</h3>
                <form onSubmit={handleUpdate}>
                    <div>
                        <label htmlFor='name'>Name: </label>
                        <input type='text' name='name' required className='form-control' placeholder='enter name'
                            value={uname} onChange={(e) => setName(e.target.value)}></input>
                    </div>
                    <div>
                        <label htmlFor='email'>Email: </label>
                        <input type='email' name='email' required className='form-control' placeholder='enter email'
                            value={uemail} onChange={(e) => setEmail(e.target.value)} ></input>
                    </div>
                    <button type='submit' className='btn btn-primary m-1'>Update</button>
                </form>
            </div>

        </div>
    )
}

export default Update;
