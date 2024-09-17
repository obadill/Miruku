import React, { useState } from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Pages/Home";
import SignIn from "./Components/UserAuth/SignIn";
import './App.css';
import Register from "./Components/UserAuth/Register";
import Layout from "./Components/Layout";


function App() {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                  path: "/",
                  element: <Home />,
                },
                {
                    path: "/login",
                    element: <SignIn />,
                },
                {
                    path: "/register",
                    element: <Register />,
                },
            ]
        },
    ]);


    return (
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
    );
}

export default App;
