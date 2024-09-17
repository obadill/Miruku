import { Outlet } from 'react-router-dom';
import NavBar from "./NavBar/NavBar";

const Layout = () => {
    return (
        <div>
            <NavBar />
            <Outlet /> {/* This renders the matched route's component */}
        </div>
    );
};

export default Layout;
