import Header from "../components/Header/Header";

const Base = (props) => (
  <>
    <Header />
    <div className="container">
      {props.children}
    </div>
    <br/>
    <br/>
    <div class="footer">
      <img
        src="https://cdn.portal.estacio.br/Ibmec_logo_branco_97adecdb45.svg"
      />
    </div>
    <div class="footer1">
      <br></br>
    </div>
  </>
)

export default Base;