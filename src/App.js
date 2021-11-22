import { useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Auth from "./views/Auth";
import Home from "./views/Home";
import Login from "./views/auth/Login";
import Register from "./views/auth/Register";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/auth" element={<Auth />}>
                    <Route path="/auth/register" element={<Register />} />
                    <Route path="/auth" element={<Login />} />
                </Route>
                <Route path="/dashboard" element={<Home />} />
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
        </BrowserRouter>
    );
}

export default App;
