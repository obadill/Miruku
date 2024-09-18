import React, { useState } from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Pages/Home";
import SignIn from "./Components/UserAuth/SignIn";
import './App.css';
import Register from "./Components/UserAuth/Register";
import Layout from "./Components/Layout";
import DetailPage from "./Components/Pages/DetailPage";
import BrowsePage from "./Components/Pages/BrowsePage";
import AboutPage from "./Components/Pages/AboutPage";


function App() {
    const [loggedIn, setLoggedIn] = useState(false);

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout loggedIn={loggedIn} setLoggedIn={setLoggedIn} />,
            children: [
                {
                  path: "/",
                  element: <Home />,
                },
                {
                    path: "/login",
                    element: <SignIn loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>,
                },
                {
                    path: "/register",
                    element: <Register />,
                },
                {
                    path: "anime/:mal_id/:title",
                    element: <DetailPage />
                },
                {
                    path: "/browse",
                    element: <BrowsePage />
                },
                {
                    path: "/about",
                    element: <AboutPage />
                }
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
