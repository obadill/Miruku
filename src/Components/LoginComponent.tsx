import React from 'react';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

const LoginComponent: React.FC = () => {
    const handleLogin = async () => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, 'email@example.com', 'password');
            console.log('User signed in:', userCredential.user);
        } catch (error) {
            console.error('Error signing in:', error);
        }
    };

    return <button onClick={handleLogin}>Sign In</button>;
};

export default LoginComponent;
