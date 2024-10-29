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
},
{
    titulo: "Projeto 2",
    texto: "Descrição do projeto",
    imagem: "https://wallpapercave.com/wp/wp1809101.jpg",
},
{
    titulo: "Projeto 3",
    texto: "Descrição do projeto",
    imagem: "https://wallpapercave.com/wp/wp1809101.jpg",
},
{
    titulo: "Projeto 4",
    texto: "Descrição do projeto",
    imagem: "https://wallpapercave.com/wp/wp1809101.jpg",
},
{
    titulo: "Projeto 5",
    texto: "Descrição do projeto",
    imagem: "https://wallpapercave.com/wp/wp1809101.jpg",
},
{
    titulo: "Projeto 6",
    texto: "Descrição do projeto",
    imagem: "https://wallpapercave.com/wp/wp1809101.jpg",
},
{
    titulo: "Projeto 7",
    texto: "Descrição do projeto",
    imagem: "https://wallpapercave.com/wp/wp1809101.jpg",
},
{
    titulo: "Projeto 8",
    texto: "Descrição do projeto",
    imagem: "https://wallpapercave.com/wp/wp1809101.jpg",
},
{
    titulo: "Projeto 9",
    texto: "Descrição do projeto",
    imagem: "https://wallpapercave.com/wp/wp1809101.jpg",
},
{
    titulo: "Projeto 10",
    texto: "Descrição do projeto",
    imagem: "https://wallpapercave.com/wp/wp1809101.jpg",
},
{
    titulo: "Projeto 11",
    texto: "Descrição do projeto",
    imagem: "https://wallpapercave.com/wp/wp1809101.jpg",
},
{
    titulo: "Projeto 12",
    texto: "Descrição do projeto",
    imagem: "https://wallpapercave.com/wp/wp1809101.jpg",
},
{
    titulo: "Projeto 13",
    texto: "Descrição do projeto",
    imagem: "https://wallpapercave.com/wp/wp1809101.jpg",
},
{
    titulo: "Projeto 14",
    texto: "Descrição do projeto",
    imagem: "https://wallpapercave.com/wp/wp1809101.jpg",
},
{
    titulo: "Projeto 15",
    texto: "Descrição do projeto",
    imagem: "https://wallpapercave.com/wp/wp1809101.jpg",
},
{
    titulo: "Projeto 16",
    texto: "Descrição do projeto",
    imagem: "https://wallpapercave.com/wp/wp1809101.jpg",
},
{
    titulo: "Projeto 17",
    texto: "Descrição do projeto",
    imagem: "https://wallpapercave.com/wp/wp1809101.jpg",
},
{
    titulo: "Projeto 18",
    texto: "Descrição do projeto",
    imagem: "https://wallpapercave.com/wp/wp1809101.jpg",
},
{
  titulo: "Projeto 19",
  texto: "Descrição do projeto",
  imagem: "https://wallpapercave.com/wp/wp1809101.jpg",
},
{
  titulo: "Projeto 20",
  texto: "Descrição do projeto",
  imagem: "https://wallpapercave.com/wp/wp1809101.jpg",
},

]

const Home = () => {

  return (
    <Base>
      <div class="headerAzul">
        <h1>Projetos</h1>
        <h3>Encontre aqui os projetos dos alunos do IBMEC.</h3>
      </div>
      <div class="pagina">

        <div class="grid-container">

          {
              dados.map((ele,i) => (
                <ProjetoCard
                    key={i}
                    titulo={ele.titulo}
                    texto={ele.texto}
                    imagem={ele.imagem}/>

              ))

          }
        </div>
      </div>
    </Base>
  )
}

export default Home