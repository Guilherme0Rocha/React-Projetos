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
      <main>
        <form style={{display:"flex", flexDirection:"column"}}>
          <div class="searchBox">
            <input class="search" name="search" placeholder="Digite algo para buscar..."></input>
            <input class= "searchButton" type="submit" value="Pesquisar"></input>
          </div>
          <p class="pFilter">Filtrar por:</p>
          <div class="filtersBox">
            <div class="filterBox">
              <p class="pFilter2">Aluno</p>
              <select class="filter" id="aluno" name="aluno">
              <option>Selecionar</option>
              <option value="aluno1">Aluno 1</option>
              <option value="aluno2">Aluno 2</option>
              <option value="aluno3">Aluno 3</option>
            </select>
            </div>
            <div class="filterBox">
              <p class="pFilter2">Curso</p>
              <select class="filter" id="curso" name="curso">
              <option>Selecionar</option>
              <option value="curso1">Curso 1</option>
              <option value="curso2">Curso 2</option>
              <option value="curso3">Curso 3</option>
            </select>
            </div>
            <div class="filterBox">
              <p class="pFilter2">Tecnologia</p>
              <select class="filter" id="tecnologia" name="tecnologia">
              <option>Selecionar</option>
              <option value="tec1">Tecnologia 1</option>
              <option value="tec2">Tecnologia 2</option>
              <option value="tec3">Tecnologia 3</option>
              </select>
            </div>
            <div class="filterBox">
              <p class="pFilter2">Ano</p>
              <select class="filter" id="ano" name="ano">
              <option>Selecionar</option>
              <option value="2024">2024</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
            </select>
            </div>
          </div>
        </form>

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
      </main>
    </Base>
  )
}

export default Home