import styled from "styled-components";

const Container = styled.div`
    width: 18em;
    height: min-content;
    border: 3px solid var(--detalhe);
    border-radius: 10px;
`;

const Titulo = styled.h2`
    padding-left:.5em;
`;

const Texto = styled.p`
    padding-left: .7em;
`;

const Imagem = styled.img`
    margin-left:auto;
    margin-right:auto;
    display:block;
    border-radius: 10px
`
export {Container, Titulo, Texto, Imagem}