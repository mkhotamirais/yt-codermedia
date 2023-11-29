import { useEffect, useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

const HomeUsersAuth = () => {
  const [name, setName] = useState("");
  const [token, setToken] = useState("");
  const [expire, setExpire] = useState("");
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const refreshToken = async () => {
    try {
      const response = await axios.get("http://localhost:3000/usersAuth/token");
      setToken(response.data.accessToken);
      const decoded = jwtDecode(response.data.accessToken);
      setName(decoded.name);
      setExpire(decoded.exp);
    } catch (error) {
      if (error.response) {
        navigate("/login");
      }
    }
  };

  const axiosJWT = axios.create();
  axiosJWT.interceptors.request.use(
    async (config) => {
      const currentDate = new Date();
      if (expire * 1000 < currentDate.getTime()) {
        const response = await axiosJWT.get("http://localhost:3000/usersAuth/token");
        config.headers.Authorization = `Bearer ${response.data.accessToken}`;
        setToken(response.data.accessToken);
        const decoded = jwtDecode(response.data.accessToken);
        setName(decoded.name);
        setExpire(decoded.exp);
      }
      return config;
    },
    (err) => {
      return Promise.reject(err);
    }
  );

  const getUsersAuth = async () => {
    const response = await axios.get("http://localhost:3000/usersAuth", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setUsers(response.data);
  };

  useEffect(() => {
    refreshToken();
    if (token) {
      getUsersAuth();
    }
  }, [token]);

  return (
    <section className="container mt-5">
      <h1>
        Welcome back <strong>{name}</strong>
      </h1>
      <button className="button is-info" onClick={getUsersAuth}>
        Get Users
      </button>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((user, i) => (
              <tr key={user.id}>
                <td>{i + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </section>
  );
};

export default HomeUsersAuth;
