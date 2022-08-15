import Login from "components/auth/login";
import Signup from "components/auth/signup";
import React from "react";
import './home.css'

const Home = () => {
    return (
        <div className="home-design">
            <h2>Spiffy</h2>
            <Login/>
            <Signup/>
        </div>
    );
}

export default Home;