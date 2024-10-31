import Base from "./Base"
import { Link } from "react-router-dom";
import dados from "../data/projetos.js"

const SobreProjeto = () => {

    return (
        <>
            <Base>
                <div class="headerAzul">
                    <h1>{dados[0].titulo}</h1>
                    <h3>{dados[0].texto}</h3>
                    {window.sessionStorage.getItem('accessToken') ? (
                    <>
                        <Link to="/edicao" class="botao" style={{ marginLeft: '57px' }}>Editar</Link>
                        <Link to="/exclusao" class="botao" style={{ marginLeft: '10px' }}>Excluir</Link>
                    </>
                        ) : null}
                </div>
                <main>
                    <img id="imgProjeto" src={dados[0].imagem}></img>
                    <div class="detalhes">
                        <div class="detalhesBox">
                            <h2>{dados[0].titulo}</h2>
                            <h3 class= "title3"> Data: dd/mm/aa</h3>
                            <h3 class= "title3">{dados[0].texto}</h3>
                        </div>
                        <div class="detalhesBox">
                            <h2>Alunos envolvidos:</h2>
                            <h3 class="title3">Aluno 1, Aluno 2, Aluno 3</h3>
                        </div>
                        <div class="detalhesBox">
                            <h2>Tecnologias usadas:</h2>
                            <h3 class="title3"> Tecnologia 1, Tecnologia 2, Tecnologia 3</h3>
                        </div>

                    </div>
                </main>
            </Base>
        </>
      )
};

export default SobreProjeto;