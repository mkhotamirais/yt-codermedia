import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const getUser = async () => {
    const response = await axios.get(`http://localhost:3000/users/${id}`);
    setName(response.data.name);
    setEmail(response.data.email);
    setGender(response.data.gender);
  };

  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:3000/users/${id}`, { name, email, gender });
      navigate("/users");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <section className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={saveUser}>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input type="text" className="input" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
          </div>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input type="email" className="input" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
          </div>
          <div className="field">
            <label className="label">Gender</label>
            <div className="control">
              <div className="select is-fullwidth">
                <select value={gender} onChange={(e) => setGender(e.target.value)}>
                  <option></option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
            </div>
          </div>
          <div className="field">
            <button type="submit" className="button is-success">
              Edit
            </button>
            <Link to="/users" className="button">
              Back
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default EditUser;
