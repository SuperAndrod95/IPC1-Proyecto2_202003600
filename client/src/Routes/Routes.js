import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import LoginPages from "../Pages/Login";
import Pokedex from "../Pages/Pokedex";

export default function Rutas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPages />} />
                <Route path="/Pokedx" element={<Pokedex/>} />
            </Routes>
        </BrowserRouter>
    );
}
