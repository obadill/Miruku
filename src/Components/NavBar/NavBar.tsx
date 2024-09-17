import React from 'react';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
    const navigate = useNavigate();

    const routeSignIn = () => {
        navigate("/login");
    }

    const routeRegister = () => {
        navigate("/register");
    }

    const routeHome = () => {
        navigate("/");
    }

    return (
        <div>
            <img className="logo" onClick={routeHome} src="/assets/mirukuLogo.png" alt="miruku logo" />
            <button onClick={routeSignIn}>Sign in</button>
            <button onClick={routeRegister}>Sign up</button>
        </div>
    )
}

export default NavBar;
