import { signOut } from "firebase/auth"
import { auth } from "../config/Firebase";
import Base from "./Base";
import { useNavigate } from "react-router-dom";

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
      <div class="headerAzul">
        <h1>Logout</h1>
        <button onClick={handleLogout} id="logout">Logout</button>
      </div>
    </Base>
  )
}


export default Logout;