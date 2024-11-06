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
                    imagem={ele.imagem}/>

                ))

            }
            </div>
        </Container>
)

}

export default ListaProjeto;