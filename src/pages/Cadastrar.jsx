import Banner from "../components/Banner/Banner";
import Base from "./Base"
import Protegida from "./Protegida";

const Cadastrar = () => {

    return (
        <>
            <Protegida>
            <Banner titulo={"Cadastrar projeto"} desc={"Preencha o formulário para cadastrar um novo projeto manualmente."}/>
            <div class="pagina">
            </div>
            </Protegida>
        </>
      )
};

export default Cadastrar;