import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
 
const Create = () => {
 
    const [firstName, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [number, setNumber] = useState("");
    const [email, setEmail] = useState("");
    const history = useNavigate();
   
 
    const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clicked");
    axios
      .post("https://6830733ff504aa3c70f7f667.mockapi.io/crud-youtube", {
        firstName: firstName,
        lastname: lastname,
        number: number,
        email: email,
       
      })
      .then(() => {
        history("/read");
      });
  };
    return (
    <>
    <div className= "d-flex justify-content-between mx-2">
     
    <h2>Create Contact</h2>
    <Link to = "/read">
    <button className="btn btn-primary"> Show Data </button>
   
    </Link>
    </div>
 
    <form>
        <div className="mb-3">
    <label className="form-label">First Name</label>
    <input type="text" className="form-control" onChange={(e) => setFirstName(e.target.value)}
    />
  </div>
  <div className="mb-3">
    <label className="form-label">Last Name</label>
    <input type="text" className="form-control" onChange={(e) => setLastName(e.target.value)} />
  </div>
  <div className="mb-3">
    <label className="form-label">Mobile Number</label>
    <input type="number" className="form-control" onChange={(e) => setNumber(e.target.value)} />
  </div>
    <div className="mb-3">
    <label className="form-label">Email Address</label>
    <input type="email" className="form-control" aria-describedby='emailHelp' onChange={(e) => setEmail(e.target.value)}/>
  </div>
 
 
 
  <button type="submit" className="btn btn-primary" onClick ={handleSubmit}>Submit</button>
</form>
 
     </>
    );
 
};
 
export default Create;