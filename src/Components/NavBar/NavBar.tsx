import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from "../../Firebase/firebase";
import Logo from "./Logo.svg";

interface NavBarProps {
    loggedIn: boolean,
    setLoggedIn: (value: boolean) => void;
}

const NavBar: React.FC<NavBarProps> = ({loggedIn, setLoggedIn}) => {
    const [query, setQuery] = useState("");

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

    const routeBrowse = () => {
        navigate("/browse");
    }

    const routeAbout = () => {
        navigate("/about");
    }


    return (
        <div className="navbar">
            <div className="logo-and-buttons">
                <img className="logo" src={Logo} alt="logo" onClick={routeHome}/>
                <button className="black-nav-button nav-buttons" onClick={routeBrowse}>Browse</button>
                <button className="black-nav-button nav-buttons" onClick={routeAbout}>About</button>
            </div>
            {loggedIn ? (
                <button className="nav-buttons primary-nav-button">{auth.currentUser?.email}</button>
            ) : (
                <div className="user-auth">
                    <button className="black-nav-button nav-buttons" onClick={routeSignIn}>Login</button>
                    <button className="primary-nav-button nav-buttons" onClick={routeRegister}>Sign up</button>
                </div>
            )}
        </div>
    );
}

export default NavBar;
