import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const UserList = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await axios.get(`http://localhost:3000/users`);
    setUsers(response.data);
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/users/${id}`);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const renderedUsers = users.map((user, index) => (
    <tr key={user.id}>
      <td>{index + 1}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.gender}</td>
      <td>
        <Link to={`/users/edit/${user.id}`} className="button is-small is-info">
          Edit
        </Link>
        <button className="button is-small is-danger" onClick={() => deleteUser(user.id)}>
          Del
        </button>
      </td>
    </tr>
  ));
  return (
    <section className="columns mt-5 is-centered">
      <div className="column is-half">
        <Link to="/users/add" className="button is-primary mb-3">
          Add
        </Link>
        <table className="table is-striped is-fullwidth">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{renderedUsers}</tbody>
        </table>
      </div>
    </section>
  );
};

export default UserList;
