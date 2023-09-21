import MyNavbar from "./MyNavbar";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [name, setName] = useState("");
  // const [token, setToken] = useState("");

  useEffect(() => {
    refreshToken();
  }, []);
  const refreshToken = async () => {
    try {
      const response = await axios.get("http://localhost:5000/token");
      // setToken(response.data.accessToken);
      const decoded = jwt_decode(response.data.accessToken);
      setName(decoded.name);
      console.log(decoded);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <MyNavbar />
      <div className="container mt-5">
        <h1>Welcome Back: {name}</h1>
      </div>
    </div>
  );
};

export default Dashboard;
