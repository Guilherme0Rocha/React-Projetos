import { onAuthStateChanged } from "firebase/auth"
import Base from "./Base"
import { auth } from "../config/Firebase";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import ProjetoCard from "../components/ProjetoCard/ProjetoCard";

const dados = [
  {
    titulo: "Projeto 1",
    texto: "Descrição do projeto",
    imagem: "https://wallpapercave.com/wp/wp1809101.jpg",
    largura: 265,
    altura: 150
  }
]

const Home = () => {

  return (
    <Base>
      <div class="headerAzul">
        <h1>Projeto</h1>
        <h3>Encontre aqui os projetos dos alunos do IBMEC.</h3>
        {window.sessionStorage.getItem('accessToken') ? (
      <>
        <Link to="/edicao" class="botao" style={{ marginLeft: '57px' }}>Editar</Link>
        <Link to="/exclusao" class="botao" style={{ marginLeft: '10px' }}>Excluir</Link>
      </>
        ) : null}
      </div>
      <div class="pagina">
        
      </div>
    </Base>
  )
}

export default Home