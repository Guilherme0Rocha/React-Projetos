import { onAuthStateChanged } from "firebase/auth"
import Base from "./Base"
import { auth } from "../config/Firebase";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import ProjetoCard from "../components/ProjetoCard/ProjetoCard";
import dados from "../data/projetos.js"

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
                    id={ele.id}
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