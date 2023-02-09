import React, { useEffect, useState } from "react";
import EditForm from "./edit_form";
import { Link, NavLink, useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
function Dashboard() {
  const navigate = useNavigate();
  const setSuccess = () => toast("User deleted successfully!"); 
  let location = useLocation();
  //console.log(location.state)
  let user = location.state;

  const onProfileClick = () => {
    navigate(`/profile/${user.email}`);
  }
  const onDeleteClick = () => {
    debugger
    var config = {
      method: 'delete',
      url: `http://localhost:3000/user/${user.email}`,
      headers: {},
    };

    axios(config).then(function (response) {
      console.log(JSON.stringify(response.data));
      if (response.status === 200) {
        setSuccess()
        navigate("/register")
      }

    })
      .catch(function (error) {
        console.log(error);
      });

  }
  
  // useEffect (() => {

  // },[]);
  return (
    <div>
      <nav className ="navbar">
        <ul className ="nav-links">
          <div className="menu">
            <li><a href="/">Home</a></li>
            <li><a>Log out</a></li>
            <li class="services">
              <a>Profile</a>
              <ul class="dropdown">
                <li><a href="#" onClick={onDeleteClick}>Delete profile</a></li>
                <li>
                  <a href="#" onClick={onProfileClick}>My profile</a>                      
                </li>
              </ul>
            </li>
          </div>
        </ul>
      </nav>

      <div>
        <img src="images/boat.jpg" alt="wel" width="1250" height="600" />
        <div className="welcome">Welcome {user?.firstname}!</div>
      </div>
    </div>

  )

}

export default Dashboard;