import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function LoginPage() {
    const [uname, setUname] = useState("")
    const [pass, setPass] = useState("")
    const [datas, setDatas] = useState([])
    const Navi = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:3700/registerdatas/get')
       
            .then((res) => {
                setDatas(res.data)
            })


    }, [])

    const login =()=>{
        const users = datas.find((users) => users.UserName === uname && users.Password === pass)
        if (users) {
            alert("Login SuccessFully")
            Navi('/')

        } else {
            alert("Incorrect UserName Or Password")
        }

    }


    return (
        <div>
            <center>

                <div className='col-5 border border-4 border-primary rounded rounded-3 p-3' style={{marginTop : "100px"}}>

                    <div >
                        <label for="user" className="col-form-label">UserName</label>
                        <input type="text" className="form-control" name="username" value={uname} onChange={(e) => setUname(e.target.value)} id="user"></input>
                    </div>
                    <div >
                        <label for="pass" className="col-form-label">Password</label>
                        <input type="password" className="form-control" name="password" value={pass} onChange={(e) => setPass(e.target.value)} id="pass"></input>
                    </div>
                    <button onClick={login} className='mt-3 btn btn-success'>LOGIN</button>

                </div>
            </center>
        </div>
    )
}
