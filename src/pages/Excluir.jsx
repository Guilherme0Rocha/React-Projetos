import Base from "./Base"
import { Link } from "react-router-dom";
import Protegida from "./Protegida";
import Banner from "../components/Banner/Banner";

const Excluir = () => {

    return (
        <>
            <Protegida>
                <Banner titulo={"Excluir projeto"} desc={"Tem certeza que quer excluir esse projeto?"}>
                </Banner>
                <main>
                    <div>
                        <Link to="/" class="confirmar" id="conf1">Confirmar</Link>
                        <Link to="/" class="cancelar">Cancelar</Link>
                    </div>
                </main>
            </Protegida>
        </>
      )
};

export default Excluir;