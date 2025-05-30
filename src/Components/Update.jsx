import React, {useState, useEffect} from 'react';
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";
 
const Update = () => {
    const [id, setId] = useState(0);
    const [firstName, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [number, setNumber] = useState("");
    const [email, setEmail] = useState("");
 
    const navigate = useNavigate();
 
    useEffect(() => {
        setId(localStorage.getItem("id"));
        setFirstName(localStorage.getItem("firstName"));
        setLastName(localStorage.getItem("lastName"));
        setNumber(localStorage.getItem("number"));
        setEmail(localStorage.getItem("email"));
    }, []);
 
 
    const handleUpdate = (e) => {
    e.preventDefault();
    console.log("Id...", id);
    axios
      .put(`https://6830733ff504aa3c70f7f667.mockapi.io/crud-youtube/${id}`,{
        firstName: firstName,
        lastname: lastname,
        number: number,
        email: email,
        })
      .then(() => {
        navigate("/read");
      });
  };
   return (
   
    <>
    <h2>Update</h2>
 
    <form>
        <div className="mb-3">
    <label className="form-label">First Name</label>
    <input type="text" className="form-control" value={firstName} onChange={(e) => setFirstName(e.target.value)}
    />
  </div>
  <div className="mb-3">
    <label className="form-label">Last Name</label>
    <input type="text" className="form-control" value={lastname} onChange={(e) => setLastName(e.target.value)} />
  </div>
  <div className="mb-3">
    <label className="form-label">Mobile Number</label>
    <input type="number" className="form-control" value={number} onChange={(e) => setNumber(e.target.value)} />
  </div>
    <div className="mb-3">
    <label className="form-label">Email Address</label>
    <input type="email" className="form-control" value={email || ""} onChange={(e) => setEmail(e.target.value)} />
  </div>
 
 
 
  <button type="submit" className="btn btn-primary mx-2" onClick={handleUpdate}>Update</button>
  <Link to="/read">
    <button className="btn btn-secondary mx-2"> Back</button>
  </Link>
</form>
   
    </>
   );
 
};
 
export default Update;