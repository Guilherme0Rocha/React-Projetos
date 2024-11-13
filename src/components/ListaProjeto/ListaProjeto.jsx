import { useState } from "react";
import { Container } from "./Style";
import ProjetoCard from "../ProjetoCard/ProjetoCard";

const ListaProjeto = ( { dadosFiltrados }) => {

return (

        <Container>
            <div className="grid-container">
            {
                dadosFiltrados.map((ele,i) => (
                <ProjetoCard
                    key={i}
                    id={ele.id}
                    titulo={ele.titulo}
                    texto={ele.texto}
                    textoPequeno={ele.textoPequeno}
                    membros={ele.membros}
                    data={ele.data}
                    tecnologias={ele.tecnologias}
                    imagem={ele.imagem}/>

                ))

            }
            </div>
        </Container>
)

}

export default ListaProjeto;