import React, { useEffect, useState } from 'react'
import '../../assets/styles/login.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Login() {

    const [username, setuserName] = useState('');
    const [password, setpassword] = useState('');
    const navigate = useNavigate();

    function submit(e) {
        e.preventDefault();
        axios.post("/admin", { work: 'login', username: username, password: password })
            .then(response => {
                if (response.data.token) {
                    localStorage.setItem('token', response.data.token);
                    setlogin();
                }
            })
            .catch(err => {
                console.log(err);
            });
    }

    function emailGetting(e) {
        setuserName(e.target.value);
    }

    function passwordGetting(e) {
        setpassword(e.target.value);
    }

    function setlogin(){
        const token = localStorage.getItem("token")
        axios.post('/admin', { work: 'token', token: token })
        .then(response=>{
            if (response.data.value){
                localStorage.setItem("value", JSON.stringify(response.data.value));
                navigate("/admin/dashboard")
            }
        })
        .catch(err => {
            console.log(err);
        });
    }

    useEffect(() => {
        const token = localStorage.getItem("token")
        axios.post('/admin', { work: 'token', token: token })
        .then(response=>{
            if (response.data.value){
                localStorage.setItem("value", JSON.stringify(response.data.value));
                navigate("/admin/dashboard")
            }
        })
        .catch(err => {
            console.log(err);
        });
    }, []);

    return (
        <>
            <div className='topadminlogin'>
                <div class="login-popup adminlogin">
                    <div class="login-header">
                        <div class="text-wrapper">Admin Login</div>
                    </div>
                    <div class="login-form">
                        <form>
                            <div class="grp1">
                                <label id="lb1">Username</label>
                                <input id="input1" type='text' name="emailId" onChange={emailGetting} placeholder='yourname@gmail.com' required></input>
                            </div>
                            <div class="grp2">
                                <label id="lb2">Password</label>
                                <input id="input2" type="password" onChange={passwordGetting} name="pass" required></input>
                            </div>
                            <div class="grp4">
                                <button id="submit_btn" type='submit' onClick={submit} style={{ color: '#fff' }}>Sign in</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;