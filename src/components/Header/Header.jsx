import { Link } from "react-router-dom";
import { Top } from "./Style";

const Header = () => (
  <Top>
    <a href="https://www.ibmec.br" id="logo">
      <img
        src="https://www.institutomillenium.org.br/wp-content/uploads/2024/02/logo-ibmec-topo-rj-450x150.png"
        width="90"
        height="30"
        class="logo"
        alt="Logo IBMEC"
        style={{marginBottom: "-1.6em", display:"inline-block", marginTop: "-2rem"}}
      />
    </a>
      {window.sessionStorage.getItem('accessToken') ? (
        <>
          <Link to="/logout" class="nav">Logout</Link>
          <Link to="/cadastro" class="nav">Cadastro</Link>
        </>
      ) : null}
      <Link to="/sobreNos" class="nav">Sobre Nós</Link>
      <Link to="/" class="nav">Projetos</Link>
  </Top>
);

export default Header;
