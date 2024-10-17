import Base from "./Base"
import { Link } from "react-router-dom";

const SobreProjeto = () => {

    return (
        <>
            <Base>
                <div class="headerAzul">
                    <h1>Sobre o Projeto</h1>
                    <h3>Sistema de repositório de projetos do IBMEC.</h3>
                    {window.sessionStorage.getItem('accessToken') ? (
                    <>
                        <Link to="/edicao" class="botao" style={{ marginLeft: '57px' }}>Editar</Link>
                        <Link to="/exclusao" class="botao" style={{ marginLeft: '10px' }}>Excluir</Link>
                    </>
                        ) : null}
                </div>
            </Base>
        </>
      )
};

export default SobreProjeto;