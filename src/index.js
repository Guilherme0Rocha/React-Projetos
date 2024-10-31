
import React from "react";
import { createRoot } from "react-dom/client";

import Home from "./pages/Home";
import { HashRouter, Route, Routes } from "react-router-dom";
import Fotos from "./pages/Fotos";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import { auth } from "./config/Firebase";
import { onAuthStateChanged } from "firebase/auth";
import Atletas from "./pages/Atletas";
import Cadastrar from "./pages/Cadastrar";
import Editar from "./pages/Editar";
import Excluir from "./pages/Excluir";
import SobreProjeto from "./pages/SobreProjeto";
import SobreNos from "./pages/SobreNos";

const container = document.getElementById("root");
const root = createRoot(container);

onAuthStateChanged(auth, (user)=> {
  if (user) {
    window.sessionStorage.setItem("accessToken", user.accessToken);
  } else {
    window.sessionStorage.removeItem("accessToken");
  }
});

root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/logout" element={<Logout/>} />
        <Route path="/cadastro" element={<Cadastrar/>}/>
        <Route path="/edicao" element={<Editar/>}/>
        <Route path="/exclusao" element={<Excluir/>}/>
        <Route path="/sobre" element={<SobreProjeto/>}/>
        <Route path="/sobre/:key" element={<SobreProjeto/>}/>
        <Route path="/sobreNos" element={<SobreNos/>}/>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
