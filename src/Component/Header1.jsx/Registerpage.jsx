import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function Registerpage() {

    const [formData, setFormData] = useState({
        name: '',
        username: '',
        email: '',
        password: '',
        contact: ''
    });



    const sendData = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3700/registerdatas/post", formData)
        alert("data Posted")
        setFormData.name("")
      
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <div className=' mt-5' >
            <center className='mt-5' >

                <form className='border border-4 border-primary rounded rounded-3 p-3 col-5' action="" onSubmit={sendData} style={{marginTop:"70px"}}>
                    <h1>Register</h1>
                    <div class="">
                        <label for="name" class="col-form-label">Name</label>
                        <input type="text" class="form-control" name="name" value={formData.name} onChange={handleChange} id="name" />
                    </div>
                    <div class="">
                        <label for="user" class="col-form-label">UserName</label>
                        <input type="text" class="form-control" name="username" value={formData.username} onChange={handleChange} id="user"></input>
                    </div>
                    <div class="">
                        <label for="email" class="col-form-label">Email</label>
                        <input type="email" class="form-control" name="email" value={formData.email} onChange={handleChange} id="email"></input>
                    </div>
                    <div class="">
                        <label for="pass" class="col-form-label">Password</label>
                        <input type="password" class="form-control" name="password" value={formData.password} onChange={handleChange} id="pass"></input>
                    </div>
                    <div class="">
                        <label for="number" class="col-form-label">Contact</label>
                        <input type="number" class="form-control" name="contact" value={formData.contact} onChange={handleChange} id="number"></input>
                    </div>
                    <div class="modal-footer justify-content-around">
                        {/* <button class="btn btn-primary" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Back to first</button> */}

                        <button type="submit" class="btn btn-primary  h-25 mt-3" >Register</button>

                        <h4>Already Have Account <Link to={'/login'}>Login</Link></h4>
                    </div>

                </form>
            </center>
        </div>
    )
}
