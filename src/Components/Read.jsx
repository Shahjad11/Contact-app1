import React, { useState, useEffect } from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
 
 
const Read = () => {
   const [data, setData] = useState([]);
 
 
   function getData() {
    axios
      .get("https://6830733ff504aa3c70f7f667.mockapi.io/crud-youtube")
      .then((res) => {
        setData(res.data);
      });
  }
  function handleDelete(id) {
    axios
      .delete(`https://6830733ff504aa3c70f7f667.mockapi.io/crud-youtube/${id}`)
      .then(() => {
        getData();
      });
  }
 
   const setToLocalStorage = (id, firstName, lastname, number, email) => {
    localStorage.setItem("id", id);
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastname", lastname);
    localStorage.setItem("number", number);
    localStorage.setItem("email", email);
  };
  useEffect(() => {
    getData();
  }, []);
 
 
 
  return (
    <>
    <div className="d-flex justify-content-between m-2">
        <h2>Submitted Details</h2>
        <Link to = "/">
        <button className="btn btn-secondary">Create</button>
        </Link>
        </div>
       
         <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">FirstName</th>
      <th scope="col">Lastname</th>
      <th scope="col">Number</th>
      <th scope="col">Email</th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
  </thead>
  {
     data.map((eachData) => {
        return (
             <>
             <tbody>
    <tr>
      <th scope="row">{eachData.id}</th>
      <td>{eachData.firstName}</td>
      <td>{eachData.lastname}</td>
      <td>{eachData.number}</td>
      <td>{eachData.email}</td>
     
      <td>
        <Link to = "/update">
        <button className="btn-success" onClick={() => setToLocalStorage(eachData.id,
            eachData.firstName,
            eachData.lastname,
            eachData.number,
            eachData.email)}>Edit{" "}</button>
      </Link>
      </td>
      <td><button className="btn-danger" onClick={() => handleDelete(eachData.id)}>Delete</button></td>
    </tr>
   
  </tbody>
             
             
             </>
 
        );
     })
     
     }
</table>
 
    </>
  );
};
 
export default Read;