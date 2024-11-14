import styled from "styled-components"

const Container = styled.div`
    .search {
    position: relative;
    left: 0;
    margin-left: 0px;
    padding: 1.2rem;
    padding-left: 1.5em;
    min-width: 40rem;
    background-color: var(--destaque2);
    text-decoration: none;
    color: var(--detalhe);
    border-radius: .9em;
    font-family: 'Krub', sans-serif;
    font-weight: 600;
    border: 1px solid var(--destaque);
    text-align: left;
    &:hover{
        background-color: var(--destaque2);
        border: 1px solid var(--detalhe);
    }
    }

    .searchBox {
    align-self:center;
    margin-top: -5.1em;
    filter: drop-shadow(0 0 0.75rem var(--detalhe));
    padding: 1.5em 1.3em;
    border-radius: .9em;
    background-color: var(--background);
    }

    .filtersBox {
    margin-left: 18.5rem;
    margin-bottom:3em;
    display: flex;
    gap:1rem;
    }

    .pFilter {
    font-weight:600;
    margin-left: 18.5rem;
    margin-top:2rem
    }

    .filterBox {
    position: relative;
    left: 0;
    margin-left: 0px;
    padding: 1.2rem;
    padding-left: 1.5em;
    min-width: 8rem;
    background-color: var(--destaque2);
    text-decoration: none;
    color: var(--detalhe);
    border-radius: .9em;
    font-family: 'Krub', sans-serif;
    font-weight: 600;
    text-align: left;
    }

    .pFilter2 {
    font-weight:600;
    margin-top: -.6rem;
    }

    .filter {
    border: 1px solid var(--destaque2);
    max-width: min-content;
    }

    .clear {
    position: relative;
    left: 0;
    margin-left: 0px;
    padding: 1.2rem;
    background-color: var(--destaque2);
    text-decoration: none;
    color: var(--detalhe);
    border-radius: .9em;
    font-family: 'Krub', sans-serif;
    font-weight: 600;
    text-align: left;
    height:1.5em;
    &:hover{
        background-color:var(--destaque)
    }
    }

    /* Estilos para dispositivos com largura de tela de até 768px (tablets e celulares) */
    @media (max-width: 768px) {
    .search {
        min-width: 20rem;
    }

    .filtersBox {
        margin-left: 6.25rem;
        margin-bottom:3em;
        display: flex;
        flex-wrap: wrap;
        gap:1rem;
    }

    .pFilter {
        font-weight:600;
        margin-left: 6.25rem;
        margin-top:2rem
    }

    .filterBox {
        position: relative;
        left: 0;
        margin-left: 0px;
        padding: 1.2rem;
        padding-left: 1.5em;
        min-width: 6rem;
        background-color: var(--destaque2);
        text-decoration: none;
        color: var(--detalhe);
        border-radius: .9em;
        font-family: 'Krub', sans-serif;
        font-weight: 600;
        text-align: left;
    }
    }

    /* Estilos para dispositivos com largura de tela de até 768px (tablets e celulares) */
    @media (max-width: 768px) {

    .search {
        min-width: 20rem;
    }

    .filtersBox {
        margin-left: 4.25rem;
        margin-bottom:3em;
        display: flex;
        flex-wrap: wrap;
        gap:1rem;
    }

    .pFilter {
        font-weight:600;
        margin-left: 4.25rem;
        margin-top:2rem
    }

    .filterBox {
        position: relative;
        left: 0;
        margin-left: 0px;
        padding: 1.2rem;
        padding-left: 1.5em;
        min-width: 6rem;
        background-color: var(--destaque2);
        text-decoration: none;
        color: var(--detalhe);
        border-radius: .9em;
        font-family: 'Krub', sans-serif;
        font-weight: 600;
        text-align: left;
    }
    }

`

export { Container }