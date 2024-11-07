import { signOut } from "firebase/auth"
import { auth } from "../config/Firebase";
import Base from "./Base";
import { useNavigate } from "react-router-dom";
import Banner from "../components/Banner/Banner";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = (e) =>{
    e.preventDefault();
    signOut(auth);
    window.sessionStorage.removeItem("accessToken");
    navigate("/");
  }

  return (
    <Base>
      <Banner titulo={"Logout"}/>
      <main>
        <div>
          <button onClick={handleLogout} id="logout">Logout</button>
        </div>
      </main>
    </Base>
  )
}


export default Logout;