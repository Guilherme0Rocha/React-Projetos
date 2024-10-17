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
  }
]

const Home = () => {

  return (
    <Base>
      <div class="headerAzul">
        <h1>Projetos</h1>
        <h3>Encontre aqui os projetos dos alunos do IBMEC.</h3>
      </div>
      <div class="pagina">
        {
          dados.map((ele,i) => (
            <ProjetoCard
                key={i}
                titulo={ele.titulo}
                texto={ele.texto}
                imagem={ele.imagem}
                largura={ele.largura}
                altura={ele.altura}/>
                
          ))
        
        }
      </div>
    </Base>
  )
}

export default Home