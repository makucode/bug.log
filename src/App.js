import { useSelector } from "react-redux";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import Auth from "./views/Auth";
import Home from "./views/dashboard/Home";
import Projects from "./views/dashboard/Projects";
import Account from "./views/dashboard/Account";
import Admin from "./views/dashboard/Admin";
import Login from "./views/auth/Login";
import Register from "./views/auth/Register";
import Dashboard from "./views/Dashboard";
import Project from "./views/dashboard/Project";
import Ticket from "./components/dashboard/Ticket";
import { AnimatePresence } from "framer-motion";

function App() {
    const user = useSelector((state) => state.auth.user);
    const location = useLocation();

    return (
        <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.pathname}>
                <Route path="/auth" element={<Auth />}>
                    <Route path="/auth/register" element={<Register />} />
                    <Route path="/auth" element={<Login />} />
                </Route>
                <Route
                    path="/dashboard"
                    element={user ? <Dashboard /> : <Navigate to="/" />}
                >
                    <Route
                        path="/dashboard/projects/:id"
                        element={<Project />}
                    />
                    <Route path="/dashboard/projects" element={<Projects />} />
                    <Route path="/dashboard/tickets/:id" element={<Ticket />} />
                    <Route
                        path="/dashboard/tickets"
                        element={<Navigate to="/dashboard/projects" />}
                    />
                    <Route path="/dashboard/account" element={<Account />} />
                    <Route path="/dashboard/admin" element={<Admin />} />
                    <Route path="/dashboard" element={<Home />} />
                </Route>
                <Route
                    path="/"
                    element={<Navigate to={user ? "/dashboard" : "/auth"} />}
                />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </AnimatePresence>
    );
}

export default App;
