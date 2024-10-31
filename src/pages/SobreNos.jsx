import Base from "./Base"
import Protegida from "./Protegida";

const SobreNos = () => {

    return (
        <>
            <Base>
            <div class="headerAzul">
                <h1>Sobre Nós</h1>
                <h3>Esse sistema de projetos foi feito pelo grupo Link.</h3>
            </div>
            <main>
                <ul style={{alignSelf:"center"}}>
                    <h1 id="titleMembros">Membros do Grupo:</h1>
                    <h2>
                        <li class="membro">
                            Guilherme Resende da Rocha <br/>
                            Curso: Engenharia da Computação - Segundo Período
                        </li>
                        <li class="membro">
                            Rafael Viana <br/>
                            Curso: Engenharia de Software - Segundo Período
                        </li>
                        <li class="membro">
                            Lucas Kronemberger <br/>
                            Curso: ADS - Primeiro Período
                        </li>
                        <li class="membro">
                            João Gabriel <br/>
                            Curso: Ciência de dados e IA - Segundo Período
                        </li>
                        <li class="membro">
                            Vitor Oliveira <br/>
                            Curso: Ciência de dados e IA - Segundo Período
                        </li>
                    </h2>
                </ul>

            </main>
            </Base>
        </>
      )
};

export default SobreNos;