import { Container } from "./Style";

const Banner = ({titulo, desc}) => (
    <Container>
    <div class="headerAzul">
        <h1>{titulo}</h1>
        <h3>{desc}</h3>
    </div>
    </Container>

)

export default Banner