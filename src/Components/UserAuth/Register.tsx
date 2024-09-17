import React, { useState } from 'react';
import { auth, db } from "../../Firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");

    const handleRegister = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password)
            const user = auth.currentUser;
            console.log(user);
            if (user) {
                await setDoc(doc(db, "Users", user.uid), {
                    email: user.email,
                    firstName: fname,
                    lastName: lname,
                });
            }
            console.log("user is registered successfully");
        } catch (error) {
            // @ts-ignore
            console.log(error.message);
        }
    }

    return (
        <form onSubmit={handleRegister}>
            <h3>Sign Up</h3>

            <div>
                <label>First name</label>
                <input
                    type="text"
                    placeholder="First name"
                    value={fname}
                    onChange={(e) => setFname(e.target.value)}
                    required
                />
            </div>

            <div>
                <label>Last name</label>
                <input
                    type="text"
                    placeholder="Last name"
                    value={lname}
                    onChange={(e) => setLname(e.target.value)}
                    required
                />
            </div>

            <div>
                <label>Email address</label>
                <input
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div>
                <label>Password</label>
                <input
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            <div className="d-grid">
                <button type="submit" className="btn btn-primary">
                    Sign Up
                </button>
            </div>
        </form>
    )
};

export default Register;