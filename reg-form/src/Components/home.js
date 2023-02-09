import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <img src="images/home.jpg" alt="wel" width="1250" height="600" />
            <Link to="/login">
                <button className="LoginButton">
                    Login
                </button>
            </Link>

            <Link to="/register">
                <button className="RegisterButton">
                    Register
                </button>
            </Link>
        </div>
    )
}

export default Home;