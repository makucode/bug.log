import { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Auth from "./views/Auth";
import Home from "./views/dashboard/Home";
import Projects from "./views/dashboard/Projects";
import Account from "./views/dashboard/Account";
import Admin from "./views/dashboard/Admin";
import Login from "./views/auth/Login";
import Register from "./views/auth/Register";
import { useSelector } from "react-redux";
import Dashboard from "./views/Dashboard";
import Project from "./views/dashboard/Project";

function App() {
    const auth = useSelector((state) => state.auth);
    const [isLoggedIn, setIsLoggedIn] = useState(auth.user ? true : false);

    return (
        <Routes>
            <Route path="/auth" element={<Auth />}>
                <Route path="/auth/register" element={<Register />} />
                <Route path="/auth" element={<Login />} />
            </Route>
            <Route path="/dashboard" element={<Dashboard />}>
                <Route path="/dashboard/projects/:id" element={<Project />} />
                <Route path="/dashboard/projects" element={<Projects />} />
                <Route path="/dashboard/tickets/:id" element={<></>} />
                <Route path="/dashboard/profile" element={<Account />} />
                <Route path="/dashboard/admin" element={<Admin />} />
                <Route path="/dashboard" element={<Home />} />
            </Route>
            <Route
                path="/"
                element={<Navigate to={isLoggedIn ? "/dashboard" : "/auth"} />}
            />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
}

export default App;
