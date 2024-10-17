import styled from "styled-components"

const Top = styled.header`
  padding: .5em 2em;
  background-color: var(--secundaria);
  display: flex;
  flex-direction: row;
  margin: 0;
  .nav {
    text-align: center;
    padding: .3em;
    margin: 0 .7em;
    min-width: 6em;
    background-color: var(--botao1);
    text-decoration: none;
    font-weight: bold;
    color: var(--detalhe);
    text-transform: uppercase;
    border-radius: .3em;
    &:hover{
      background-color: var(--botaoHover);
    }
  }
  #logo {
    margin-right: 40px
  }
`

export {Top}