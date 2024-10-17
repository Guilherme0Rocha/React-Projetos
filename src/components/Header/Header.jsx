import { Link } from "react-router-dom";
import { Top } from "./Style";

const Header = () => (
  <Top>
    <a href="https://www.ibmec.br" target="_blank" rel="noopener noreferrer">
      <img 
        src="https://www.institutomillenium.org.br/wp-content/uploads/2024/02/logo-ibmec-topo-rj-450x150.png" 
        width="90" 
        height="30" 
        class="logo" 
        alt="Logo IBMEC"
      />
    </a>
    <Link to="/">Projetos</Link>
    {window.sessionStorage.getItem('accessToken') ? (
      <>
        <Link to="/logout">Logout</Link>
        <Link to="/cadastro">Cadastro</Link>
      </>
    ) : null}
  </Top>
);

export default Header;
