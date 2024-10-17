import { Link } from "react-router-dom";
import { Top } from "./Style";

const Header = () => (
  <Top>
    <img src="https://www.institutomillenium.org.br/wp-content/uploads/2024/02/logo-ibmec-topo-rj-450x150.png" width="90" height="30" class="logo"/>
    <Link to="/">Projetos</Link>
    {window.sessionStorage.getItem('accessToken') ? (
      <>
        <Link to="/logout">Logout</Link>
        <Link to="/cadastro">Cadastro</Link>
        <Link to="/edicao">Edição</Link>
      </>
      ) : null}
    {/*<Link to="/fotos">Fotos</Link>
    <Link to="/atletas">Atletas</Link>
    <Link to="/sobrenos">Sobre Nós</Link>*/}
  </Top>
)

export default Header;