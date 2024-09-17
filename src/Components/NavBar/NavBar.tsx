import React from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from "../../Firebase/firebase";

interface NavBarProps {
    loggedIn: boolean,
    setLoggedIn: (value: boolean) => void;
}

const NavBar: React.FC<NavBarProps> = ({loggedIn, setLoggedIn}) => {
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
            {loggedIn
                ? <button>{auth.currentUser?.email}</button>
                :
                <>
                    <button onClick={routeSignIn}>Sign in</button>
                    <button onClick={routeRegister}>Sign up</button>
                </>
            }
        </div>
    )
}

export default NavBar;
