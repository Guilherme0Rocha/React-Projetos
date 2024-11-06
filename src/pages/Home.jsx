import { onAuthStateChanged } from "firebase/auth"
import Base from "./Base"
import { auth } from "../config/Firebase";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProjetoCard from "../components/ProjetoCard/ProjetoCard";
import dados from "../data/projetos.js";
import Filtros from "../components/Filtros/Filtros.jsx";
import ListaProjeto from "../components/ListaProjeto/ListaProjeto.jsx";
import Banner from "../components/Banner/Banner.jsx"


const Home = () => {
  const [dadosFiltrados, setDados] = useState(dados);

  const filtra = (entrada) => {
  setDados(dados.filter(
    (ele) => ele.titulo.toLowerCase().includes(entrada.toLowerCase()) || ele.texto.toLowerCase().includes(entrada.toLowerCase()) || ele.membros.toLowerCase().includes(entrada.toLowerCase()) || ele.data.toLowerCase().includes(entrada.toLowerCase()) || ele.tecnologias.toLowerCase().includes(entrada.toLowerCase())
  ))
}

  return (
    <Base>
      <Banner titulo={"Projetos"} desc={"Encontre aqui os projetos do IBMEC."}/>
      <main>
        <Filtros filtra={filtra}/>
        <ListaProjeto dadosFiltrados={ dadosFiltrados }>
        </ListaProjeto>
      </main>
    </Base>
  )
}


export default Home;