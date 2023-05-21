import React,{useCallback, useEffect, useState} from 'react';
import logo from "../../assets/img/logo512.png";
import './style.css';
import {useNavigate} from "react-router-dom";

const LogIn = () => {
    const navigate = useNavigate()
    const [form, setForm] = useState({
        email: '',
        password: ''
    });
    const [value, setValue] = useState('Submit');
    const [error, setError] = useState(false);
    const [passError, setPassError] = useState(false);
    const [disabled, setDisabled] = useState(true)
    const handleChangeEmail = (event)=>{
        setForm({...form, email: event.target.value})
    }
    const handleChangePassword = (event)=>{
        setForm({...form, password: event.target.value})
    }
    const handleClick = ()=>{
        console.log(form)
        setValue('Submitted');
        navigate('Welcome')
    }
    useEffect(()=>{
        if (form.email.length > 6 && form.password.length >6){
            setDisabled(false)
        }else{
            setDisabled(true)
        }
    },[form])
    useEffect(()=>{
        if (form.email.length > 10){
            setError(false)
        }else {
            setError(true)
        }
    },[form.email])
    useEffect(()=>{
        if (form.password.length > 6){
            setPassError(false)
        }else {
            setPassError(true)
        }

    },[form.password])
    const memory = useCallback(()=>{

    },[])

    return (
        <div className={"container"}>
            <img src={logo} className={'logo'}/>
            <div className={'inputContainer'}>
                <label>Email</label>
                <input  onChange={handleChangeEmail}
                        style={{borderColor : error === true ? "red" : "black"}}
                        type={"email"}
                        placeholder={'plz enter your email'}
                />
                <p style={{display : error === true ? "flex" : "none"}}>Email Invalid</p>
            </div>
            <div className={'inputContainer'}>
                <label>Password</label>
                <input onChange={handleChangePassword}
                       style={{borderColor : passError === true ? "red" : "black"}}
                       type={'password'}
                       placeholder={'plz enter your password'}
                />
                <p style={{display : passError === true ? "flex" : "none"}}>password invalid</p>
            </div>
            <button disabled={disabled} onClick={()=>{handleClick()}}> {value}</button>
        </div>
    );
};

export default LogIn;
