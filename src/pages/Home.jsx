import { onAuthStateChanged } from "firebase/auth"
import Base from "./Base"
import { auth } from "../config/Firebase";
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import ProjetoCard from "../components/ProjetoCard/ProjetoCard";
import dados from "../data/projetos.js";
import Filtros from "../components/Filtros/Filtros.jsx";
import ListaProjeto from "../components/ListaProjeto/ListaProjeto.jsx";
import Banner from "../components/Banner/Banner.jsx"


const Home = () => {
  const [dadosFiltrados, setDados] = useState(dados);
  const [dadosFiltro, setDadosFiltrados] = useState(dados);
  const [parametros, setParametros] = useSearchParams();

  const filtra = (entrada) => {
  setDados(dadosFiltro.filter(
    (ele) => ele.titulo.toLowerCase().includes(entrada.toLowerCase()) || ele.texto.toLowerCase().includes(entrada.toLowerCase()) || ele.membros.toLowerCase().includes(entrada.toLowerCase()) || ele.data.toLowerCase().includes(entrada.toLowerCase()) || ele.tecnologias.toLowerCase().includes(entrada.toLowerCase())
  ))
  }

  useEffect( () => {
    if (parametros.has('membro')){
      setDadosFiltrados(dados.filter(
        (ele) =>
          ele.membros.toLowerCase().includes(decodeURIComponent(parametros.get('membro').toLowerCase())

        )
        ))
    } else {
      setDadosFiltrados(dados)
    }
      setDados(dadosFiltro);
  }, [parametros])
  return (
    <Base>
      <Banner titulo={"Projetos"} desc={"Encontre aqui os projetos do IBMEC."}/>
      <main>
        <Filtros filtra={filtra} parametros={parametros} setParametros={setParametros}/>
        <ListaProjeto dadosFiltrados={ dadosFiltrados }>
        </ListaProjeto>
      </main>
    </Base>

  )
}


export default Home;