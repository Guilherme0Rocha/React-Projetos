import { onAuthStateChanged } from "firebase/auth"
import Base from "./Base"
import { auth } from "../config/Firebase";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {

  return (
    <Base>
      <div class="headerAzul">
        <h1>Projetos</h1>
        <h3>Encontre aqui os projetos dos alunos do IBMEC.</h3>
        {window.sessionStorage.getItem('accessToken') ? (
      <>
        <Link to="/edicao" class="botao" style={{ marginLeft: '57px' }}>Editar</Link>
        <Link to="/exclusao" class="botao" style={{ marginLeft: '10px' }}>Excluir</Link>
      </>
        ) : null}
      </div>
    </Base>
  )
}

export default Home