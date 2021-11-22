import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./views/Auth";
import Home from "./views/Home";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/auth" element={<Auth />} />
                <Route path="/dashboard" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
