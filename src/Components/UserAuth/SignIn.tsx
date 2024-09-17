import React, { useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase/firebase";

interface SignInProps {
    loggedIn: boolean,
    setLoggedIn: (value: boolean) => void;
}

const SignIn: React.FC<SignInProps> = ({ loggedIn, setLoggedIn }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignIn = async (e: any) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            // route user to home page while logged in
            // navigate("/home");
            setLoggedIn(true);
            console.log("hello world");
        } catch (e: any) {
            console.log("Incorrect email or password");
            console.log(e.message);
        }
    }

    return (
        <form onSubmit={handleSignIn}>
            <h3>Login</h3>

            <div>
                <label>Email address</label>
                <input
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>

            <div>
                <label>Password</label>
                <input
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>

            <div className="d-grid">
                <button type="submit" className="btn btn-primary">
                    Log in
                </button>
            </div>
        </form>
    )
};

export default SignIn;