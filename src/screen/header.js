import React from 'react';
import './style.css';
import {useNavigate, useLocation} from "react-router-dom";


const Header = () => {
    const location = useLocation();
    const navigation = useNavigate();
    const HandleNavigate = ()=>{
        navigation('/Welcome')
    }
    const HandleNavigateService = ()=>{
        navigation('/Service')
    }
    return (
        <div className={'App'}>
            <div onClick={HandleNavigate} className={location.pathname === '/Welcome'? 'activeButton':'button'}>
                <p>WelcomePage</p>
            </div>
            <div onClick={HandleNavigateService} className={location.pathname === '/Service'? 'activeButton':'button'}>
                <p>Service page</p>
            </div>
            <div className={'button'}>
                <p>About</p>
            </div>
            <div className={'button'}>
                <p>LogIn</p>
            </div>
        </div>
    );
};

export default Header;
