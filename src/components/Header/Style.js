import styled from "styled-components"

const Top = styled.header`
  position: relative;
  padding: .5em 2em;
  background-color: var(--secundaria);
  margin: 0;
  .nav {
    text-align: center;
    padding: .3em;
    margin-left:.7em;
    min-width: 6em;
    background-color: var(--botao1);
    text-decoration: none;
    font-weight: bold;
    color: var(--detalhe);
    text-transform: uppercase;
    border-radius: .3em;
    margin-top:0.8em;
    float:right;
    &:hover{
      background-color: var(--botaoHover);
    }
  }
  #logo {
    margin-right: 40px
  }

  @media (max-width: 480px) {
    .nav {
      margin-left: .3em;
      min-width: 0em;
    }
  }
`

export {Top}