import { useState } from "react";
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useEffect } from "react";

const EditUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("male");
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    getUserById();
  }, []);
  const getUserById = async () => {
    const response = await axios.get(`http://localhost:3000/users/${id}`);
    setName(response.data.name);
    setEmail(response.data.email);
    setGender(response.data.gender);
  };
  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:3000/users/${id}`, { name, email, gender });
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="container">
      <div className="columns">
        <div className="column is-half">
          <form onSubmit={updateUser} className="mt-5">
            <div className="field">
              <label className="label">Name</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  placeholder="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  placeholder="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Gender</label>
              <div className="control">
                <div className="select is-fullwidth">
                  <select value={gender} onChange={(e) => setGender(e.target.value)}>
                    <option value="male">male</option>
                    <option value="female">female</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="field">
              <div className="control">
                <button type="submit" className="button is-success">
                  Update
                </button>
                <Link to="/" className="button ml-2">
                  Back
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditUser;
