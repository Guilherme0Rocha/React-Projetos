import Base from "./Base"
import { Link } from "react-router-dom";
import Protegida from "./Protegida";

const Excluir = () => {

    return (
        <>
            <Protegida>
                <div class="headerAzul">
                    <h1>Excluir projeto</h1>
                    <h3>Tem certeza que quer excluir esse projeto?</h3>
                    <Link to="/" class="confirmar" id="conf1">Confirmar</Link> <Link to="/" class="cancelar">Cancelar</Link>
                </div>
            </Protegida>
        </>
      )
};

export default Excluir;