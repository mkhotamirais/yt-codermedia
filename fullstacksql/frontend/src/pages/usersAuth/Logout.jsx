import { useNavigate } from "react-router-dom";
import axios from "axios";

const Logout = () => {
  const navigate = useNavigate();

  const Logout = async () => {
    try {
      await axios.delete(`http://localhost:3000/usersAuth/logout`);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <button onClick={Logout} className="button">
      Logout
    </button>
  );
};

export default Logout;
