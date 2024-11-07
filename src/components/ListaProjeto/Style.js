import styled from "styled-components"

const Container = styled.div`
    .grid-container {
    display: grid;
    grid-template-columns: auto auto auto auto;
    gap: 20px;
    padding: 10px;
    align-items: center;
    justify-content: center;
    }

    #imgProjeto {
    width:40%;
    border-radius:.5rem;
    margin-bottom:2rem;
    align-self: center;
    }

    /* Estilos para dispositivos com largura de tela de até 768px (tablets e celulares) */
    @media (max-width: 768px) {

    .grid-container {
        grid-template-columns: auto auto;
    }

    }

    /* Estilos para dispositivos com largura de tela de até 480px (celulares) */
    @media (max-width: 480px) {

    .grid-container {
        grid-template-columns: auto;
    }

    }

`

export { Container }