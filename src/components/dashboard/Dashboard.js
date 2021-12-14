import { useState } from "react";
import { Link } from "react-router-dom";

// Components


function Dashboard() {

    return (
        <main className="dashboard">
            <h1>Welcome to Segwitz blog application</h1>
            <Link to ="/blogs">Blogs</Link>
        </main>
    );

}


export default Dashboard;