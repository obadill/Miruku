import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from "../../Firebase/firebase";
import SearchBar from "../SearchBar/SearchBar";
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

    return (
        <div className="navbar">
            <div className="logo-search">
                <img className="logo" src={Logo} alt="logo" onClick={routeHome}/>
                <div className="search-bar-container">
                    <SearchBar query={query} setQuery={setQuery} />
                </div>
            </div>
            {loggedIn ? (
                <button>{auth.currentUser?.email}</button>
            ) : (
                <div className="user-auth">
                    <p onClick={routeSignIn}>Login</p>
                    <button onClick={routeRegister}>Sign up</button>
                </div>
            )}
        </div>
    );

}

export default NavBar;
