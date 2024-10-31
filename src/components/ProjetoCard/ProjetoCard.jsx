import { Container, Titulo, Texto, Imagem } from "./Style";
import { Link } from "react-router-dom";

const ProjetoCard = (props) => (
    <Container>
        <Titulo>{props.titulo}</Titulo>
        <Texto>{props.texto}</Texto>
        <Imagem src={props.imagem} width="90%"></Imagem>
        <Link to={`/sobre/${props.id}`} class="botao" style={{
            marginLeft: "0.9em",
            marginRight: "0.9em",
            marginTop: "0.5em",
            marginBottom: "0.5em",
            display: "flex",
            justifyContent: "center",
        }}>Saber Mais</Link>
    </Container>
    
)

export default ProjetoCard;