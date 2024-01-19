import React from "react"
import "./homepage.css"
import {  useNavigate } from "react-router-dom";

const Homepage = ({  setLoginUser }) => {
    const navigate = useNavigate();




    const handleLogout = () => {
        // Clear user information (you may have more state to clear depending on your application)
        setLoginUser(null);
        // Redirect to the login page
        navigate("/login");
      };
    return (
        <div className="homepage">
            <h1>Hello Homepage</h1>
            <div className="button"  onClick={handleLogout}>Logout</div>
        </div>
    )
}

export default Homepage