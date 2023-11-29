import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { getMe } from "./roleSlice";

const UsersList = () => {
  const [users, setUsers] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError, user } = useSelector((state) => state.roles);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);
  useEffect(() => {
    if (isError) {
      navigate("/rolesProducts/login");
    }
    if (user && user.role !== "admin") {
      navigate("/rolesProducts");
    }
  }, [isError, user, navigate]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get("http://localhost:3000/roleUsers");
    setUsers(response.data);
  };

  const deleteUser = async (userId) => {
    await axios.delete(`http://localhost:3000/roleUsers/${userId}`);
    getUsers();
  };

  return (
    <div>
      <h1 className="title">users</h1>
      <h2 className="subtitle">List of users</h2>
      <Link to="add" className="button is-primary mb-2">
        Add New
      </Link>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.uuid}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <Link to={`edit/${user.uuid}`} className="button is-small is-info">
                  Edit
                </Link>
                <button onClick={() => deleteUser(user.uuid)} className="button is-small is-danger">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersList;
