import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link, Navigate } from "react-router-dom";

// Components


function Dashboard() {

    const navigate = useNavigate();

    useEffect(() => {

        if(!localStorage.getItem("user")) navigate("/")

    }, [])


    if(!localStorage.getItem("user")) return <div>{navigate("/")}</div>

    return (
        <main className="dashboard">
            <h1>Welcome to Segwitz blog application</h1>
            <Link to ="/blogs">Blog List</Link>
            <Link to ="/blogs/add-new-blog">New Blog</Link>
        </main>
    );

}


export default Dashboard;