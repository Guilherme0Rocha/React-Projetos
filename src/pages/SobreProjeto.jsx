import Base from "./Base"
import { Link, useParams } from "react-router-dom";
import dados from "../data/projetos.js"
import Banner from "../components/Banner/Banner.jsx";

const SobreProjeto = () => {

    const { id } = useParams();

    return (
        <>
            <Base>
                <Banner titulo={dados[id-1].titulo} desc={dados[id-1].texto}/>
                <main>
                    <div>
                        {window.sessionStorage.getItem('accessToken') ? (
                        <>
                            <Link to="/edicao" class="botao" style={{ marginLeft: '57px' }}>Editar</Link>
                            <Link to="/exclusao" class="botao" style={{ marginLeft: '10px' }}>Excluir</Link>
                        </>
                            ) : null}
                    </div>
                    <img id="imgProjeto" src={dados[id-1].imagem}></img>
                    <div class="detalhes">
                        <div class="detalhesBox">
                            <h2>{dados[id-1].titulo}</h2>
                            <h3 class= "title3">{dados[id-1].data}</h3>
                            <h3 class= "title3">{dados[id-1].texto}</h3>
                        </div>
                        <div class="detalhesBox">
                            <h2>Membros envolvidos:</h2>
                            <h3 class="title3">{dados[id-1].membros}</h3>
                        </div>
                        <div class="detalhesBox">
                            <h2>Tecnologias usadas:</h2>
                            <h3 class="title3">{dados[id-1].tecnologias}</h3>
                        </div>

                    </div>
                </main>
            </Base>
        </>
      )
};

export default SobreProjeto;