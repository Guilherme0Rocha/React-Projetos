import { useState } from "react";
import { Container } from "./Style";
import dados from "/src/data/projetos.js";

const Filtros = ({ filtra })=> {

return (
    <Container>
        <form style={{display:"flex", flexDirection:"column"}}>
            <div class="searchBox">
                <input
                class="search"
                type="text"
                name="search"
                placeholder="Digite algo para buscar..."
                onChange={ (e) => {filtra(e.target.value)}}
                ></input>
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
        </Container>
)
}

export default Filtros;