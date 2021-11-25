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
import Tickets from "./views/dashboard/Tickets";

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
                <Route path="/dashboard/projects/:id" element={<Projects />} />
                <Route path="/dashboard/projects" element={<Projects />} />
                <Route path="/dashboard/tickets/:id" element={<Tickets />} />
                <Route path="/dashboard/tickets" element={<Tickets />} />
                <Route path="/dashboard/profile" element={<Account />} />
                <Route path="/dashboard/admin" element={<Admin />} />
                <Route path="/dashboard" element={<Home />} />
            </Route>
            <Route
                path="/"
                element={
                    isLoggedIn ? (
                        <Navigate to="/dashboard" />
                    ) : (
                        <Navigate to="/auth" />
                    )
                }
            />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
}

export default App;
