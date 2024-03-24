import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Loginform from './Pages/Loginform/index';
import Principal from './Pages/Principal/index';
import Novoparticipante from './Pages/Novoparticipante/index';

export default function MyRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Loginform />} />
                <Route path="/principal" element={<Principal />} />
                <Route path="/novoparticipante" element={<Novoparticipante />} />
            </Routes>
        </BrowserRouter>
    );
}