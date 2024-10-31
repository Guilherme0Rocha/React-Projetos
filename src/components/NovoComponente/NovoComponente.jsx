import { Container, Texto, Titulo } from "./Style";
// Componenete Novo
const NovoComponente = (props) => (
    <Container>
        <Titulo>{props.titulo}</Titulo>
        <Texto>{props.texto}</Texto>
    </Container>
);

export default NovoComponente;