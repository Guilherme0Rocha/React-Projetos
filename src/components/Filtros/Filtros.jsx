import { useState } from "react";
import { Container } from "./Style";
import dados from "/src/data/projetos.js";

const Filtros = ({ filtra, setSelectedMembro, setSelectedTecnologia, setSelectedAno })=> {

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
                <select class="filter" id="aluno" name="aluno" defaultValue="Selecionar" onChange={(e) => setSelectedMembro(e.target.value)}>
                    <option disabled>Selecionar</option>
                    <option value="Carlos Silva">Carlos Silva</option>
                    <option value="Marina Sousa">Marina Sousa</option>
                    <option value="João Lima">João Lima</option>
                    <option value="Beatriz Fernandes">Beatriz Fernandes</option>
                    <option value="Lucas Amaral">Lucas Amaral</option>
                    <option value="Fernanda Pinto">Fernanda Pinto</option>
                    <option value="André Melo">André Melo</option>
                    <option value="Patrícia Costa">Patrícia Costa</option>
                    <option value="Tiago Souza">Tiago Souza</option>
                    <option value="Rafaela Silva">Rafaela Silva</option>
                    <option value="Pedro Gonçalves">Pedro Gonçalves</option>
                    <option value="Vanessa Oliveira">Vanessa Oliveira</option>
                    <option value="Júlia Nunes">Júlia Nunes</option>
                    <option value="Gabriel Ferreira">Gabriel Ferreira</option>
                    <option value="Daniel Mendes">Daniel Mendes</option>
                    <option value="Mariana Silva">Mariana Silva</option>
                    <option value="João Ferreira">João Ferreira</option>
                    <option value="Luciana Almeida">Luciana Almeida</option>
                    <option value="Fernanda Moreira">Fernanda Moreira</option>
                    <option value="Carlos Lima">Carlos Lima</option>
                    <option value="Roberta Santos">Roberta Santos</option>
                    <option value="Bruno Nunes">Bruno Nunes</option>
                    <option value="Sara Freitas">Sara Freitas</option>
                    <option value="Miguel Amaral">Miguel Amaral</option>
                    <option value="Sofia Lima">Sofia Lima</option>
                    <option value="Pedro Teixeira">Pedro Teixeira</option>
                    <option value="Amanda Borges">Amanda Borges</option>
                    <option value="Beatriz Silva">Beatriz Silva</option>
                    <option value="Marcelo Santos">Marcelo Santos</option>
                    <option value="Renata Oliveira">Renata Oliveira</option>
                    <option value="João Ferreira">João Ferreira</option>
                    <option value="Gabriel da Silva">Gabriel da Silva</option>
                    <option value="Caio de Sá">Caio de Sá</option>
                    <option value="Gabriella Pereira">Gabriella Pereira</option>
                    <option value="Juliana Souza">Juliana Souza</option>
                    <option value="Carla Carvalho">Carla Carvalho</option>
                    <option value="Carol Cariello">Carol Cariello</option>
                    <option value="Guilherme Peixoto">Guilherme Peixoto</option>
                    <option value="Jéssica Nunes">Jéssica Nunes</option>
                    <option value="Roberto Carlos">Roberto Carlos</option>
                    <option value="Amanda Pinho">Amanda Pinho</option>
                    <option value="Pedro Seixas">Pedro Seixas</option>
                    <option value="João Nascimento">João Nascimento</option>
                    <option value="João Carvalho">João Carvalho</option>
                    <option value="Pedro Costa">Pedro Costa</option>
                    <option value="Aloísio Chulapa">Aloísio Chulapa</option>
                    <option value="Sarah Moreira">Sarah Moreira</option>
                    <option value="Matheus Moreira">Matheus Moreira</option>
                    <option value="Eduardo Romualdo">Eduardo Romualdo</option>
                    <option value="Ricardo Flores">Ricardo Flores</option>
                    <option value="Ana Paula">Ana Paula</option>
                    <option value="Paulo Jardim">Paulo Jardim</option>
                    <option value="Mariana Santos">Mariana Santos</option>
                    <option value="Felipe Gabriel">Felipe Gabriel</option>
                    <option value="Renata Gomes">Renata Gomes</option>
                    <option value="Clara Martins">Clara Martins</option>
                    <option value="Roberto Pereira">Roberto Pereira</option>
                    <option value="Lucia Santos">Lucia Santos</option>
                    <option value="Teresa Lucas">Teresa Lucas</option>
                    <option value="Miguel Dos Anjos">Miguel Dos Anjos</option>
                    <option value="Sandra Tavares">Sandra Tavares</option>
                    <option value="Bruno Souza">Bruno Souza</option>
                    <option value="Camila Silva">Camila Silva</option>
                    <option value="Diego Lisboa">Diego Lisboa</option>
                </select>
                </div>
                <div class="filterBox">
                <p class="pFilter2">Tecnologia</p>
                <select class="filter" id="tecnologia" name="tecnologia" defaultValue="Selecionar" onChange={(e) => setSelectedTecnologia(e.target.value)}>
                    <option disabled>Selecionar</option>
                    <option value="PHP">PHP</option>
                    <option value="MySQL">MySQL</option>
                    <option value="CSS">CSS</option>
                    <option value="React Native">React Native</option>
                    <option value="API OpenWeather">API OpenWeather</option>
                    <option value="JavaScript">JavaScript</option>
                    <option value="Node.js">Node.js</option>
                    <option value="Express">Express</option>
                    <option value="MongoDB">MongoDB</option>
                    <option value="Vue.js">Vue.js</option>
                    <option value="Firebase">Firebase</option>
                    <option value="Bootstrap">Bootstrap</option>
                    <option value="Django">Django</option>
                    <option value="PostgreSQL">PostgreSQL</option>
                    <option value="Tailwind CSS">Tailwind CSS</option>
                    <option value="Java">Java</option>
                    <option value="Spring Boot">Spring Boot</option>
                    <option value="Oracle Database">Oracle Database</option>
                    <option value="Python">Python</option>
                    <option value="TensorFlow">TensorFlow</option>
                    <option value="Twilio API">Twilio API</option>
                    <option value="Socket.io">Socket.io</option>
                    <option value="React">React</option>
                    <option value="JWT">JWT</option>
                    <option value="Chart.js">Chart.js</option>
                    <option value="Arduino">Arduino</option>
                    <option value="Raspberry Pi">Raspberry Pi</option>
                    <option value="MQTT">MQTT</option>
                    <option value="AWS S3">AWS S3</option>
                    <option value="FFmpeg">FFmpeg</option>
                    <option value="Ruby on Rails">Ruby on Rails</option>
                    <option value="Stripe API">Stripe API</option>
                    <option value="Flutter">Flutter</option>
                    <option value="TensorFlow Lite">TensorFlow Lite</option>
                    <option value="Kotlin">Kotlin</option>
                    <option value="Neo4j">Neo4j</option>
                </select>
                </div>
                <div class="filterBox">
                <p class="pFilter2">Ano</p>
                <select class="filter" id="ano" name="ano" defaultValue="Selecionar" onChange={(e) => setSelectedAno(e.target.value)}>
                    <option disabled>Selecionar</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                </select>
                </div>
                <a href="https://guilherme0rocha.github.io/React-Projetos/" class="clear">Limpar Filtros</a>
            </div>
            </form>
        </Container>
)
}

export default Filtros;