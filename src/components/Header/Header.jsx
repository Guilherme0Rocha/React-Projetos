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
      />
    </a>
    <Link to="/" class="nav">Projetos</Link>
    {window.sessionStorage.getItem('accessToken') ? (
      <>
        <Link to="/logout" class="nav">Logout</Link>
        <Link to="/cadastro" class="nav">Cadastro</Link>
      </>
    ) : null}
  </Top>
);

export default Header;
