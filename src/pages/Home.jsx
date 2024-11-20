import { onAuthStateChanged } from "firebase/auth";
import Base from "./Base";
import { auth } from "../config/Firebase";
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import ProjetoCard from "../components/ProjetoCard/ProjetoCard";
import dados from "../data/projetos.js";
import Filtros from "../components/Filtros/Filtros.jsx";
import ListaProjeto from "../components/ListaProjeto/ListaProjeto.jsx";
import Banner from "../components/Banner/Banner.jsx";

const Home = () => {
  const [dadosFiltrados, setDadosFiltrados] = useState(dados);
  const [dadosFiltro, setDadosFiltro] = useState(dados);
  const [parametros, setParametros] = useSearchParams();

  // State for the dropdown filters
  const [selectedMembro, setSelectedMembro] = useState("");
  const [selectedTecnologia, setSelectedTecnologia] = useState("");
  const [selectedAno, setSelectedAno] = useState("");

  const filtra = (entrada) => {
    const filtered = dadosFiltro.filter(
      (ele) =>
        ele.titulo.toLowerCase().includes(entrada.toLowerCase()) ||
        ele.texto.toLowerCase().includes(entrada.toLowerCase()) ||
        ele.membros.toLowerCase().includes(entrada.toLowerCase()) ||
        ele.data.toLowerCase().includes(entrada.toLowerCase()) ||
        ele.tecnologias.toLowerCase().includes(entrada.toLowerCase())
    );
    setDadosFiltrados(filtered);
  };

  // Apply dropdown filters
  const applyDropdownFilters = () => {
    let filtered = dados;

    if (selectedMembro) {
      filtered = filtered.filter((ele) =>
        ele.membros.toLowerCase().includes(selectedMembro.toLowerCase())
      );
    }

    if (selectedTecnologia) {
      filtered = filtered.filter((ele) =>
        ele.tecnologias.toLowerCase().includes(selectedTecnologia.toLowerCase())
      );
    }

    if (selectedAno) {
      filtered = filtered.filter((ele) => ele.data.includes(selectedAno));
    }

    setDadosFiltrados(filtered);
  };

  useEffect(() => {
    if (parametros.has("membro")) {
      const membroParam = decodeURIComponent(parametros.get("membro").toLowerCase());
      setDadosFiltrados(
        dados.filter((ele) =>
          ele.membros.toLowerCase().includes(membroParam)
        )
      );
    } else {
      setDadosFiltrados(dados);
    }
  }, [parametros]);

  // Reapply filters when dropdown selections change
  useEffect(() => {
    applyDropdownFilters();
  }, [selectedMembro, selectedTecnologia, selectedAno]);

  return (
    <Base>
      <Banner titulo={"Projetos"} desc={"Encontre aqui os projetos do IBMEC."} />
      <main>
        <Filtros
          filtra={filtra}
          parametros={parametros}
          setParametros={setParametros}
          setSelectedMembro={setSelectedMembro}
          setSelectedTecnologia={setSelectedTecnologia}
          setSelectedAno={setSelectedAno}
        />
        <ListaProjeto dadosFiltrados={dadosFiltrados} />
      </main>
    </Base>
  );
};

export default Home;
