import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Cadastro from "../paginas/cadastro"
import Login from "../paginas/login"
import Principal from "../paginas/principal"

export const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/login" />} />
                <Route path="/login" element={<Login />}></Route>
                <Route path="/cadastro" element={<Cadastro />}></Route>
                <Route path="/principal" element={<Principal />}></Route>
            </Routes>
        </BrowserRouter>
    )
}