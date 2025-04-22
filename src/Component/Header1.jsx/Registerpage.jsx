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
        axios.post("https://ecbackend-rg8w.onrender.com/registerdatas/post", formData)
        alert("data Posted")
        setFormData.name("")
        setFormData.username("")
        setFormData.email("")
        setFormData.password("")
        setFormData.contact("")
      
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
                    <div>
                        <label for="name" className="col-form-label">Name</label>
                        <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} id="name" />
                    </div>
                    <div>
                        <label for="user" clasNamesName="col-form-label">UserName</label>
                        <input type="text" className="form-control" name="username" value={formData.username} onChange={handleChange} id="user"></input>
                    </div>
                    <div>
                        <label for="email" className="col-form-label">Email</label>
                        <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} id="email"></input>
                    </div>
                    <div>
                        <label for="pass" className="col-form-label">Password</label>
                        <input type="password" className="form-control" name="password" value={formData.password} onChange={handleChange} id="pass"></input>
                    </div>
                    <div>
                        <label for="number" className="col-form-label">Contact</label>
                        <input type="number" className="form-control" name="contact" value={formData.contact} onChange={handleChange} id="number"></input>
                    </div>
                    <div className="modal-footer justify-content-around">
                       
                        <button type="submit" className="btn btn-primary  h-25 mt-3" >Register</button>

                        <h4>Already Have Account <Link to={'/login'}>Login</Link></h4>
                    </div>

                </form>
            </center>
        </div>
    )
}
