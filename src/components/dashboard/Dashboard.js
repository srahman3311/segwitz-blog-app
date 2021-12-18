import {useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Stylesheet
import styles from "./Dashboard.module.css";

// Components
import Header from "../reuseable-components/Header";


function Dashboard() {

    const navigate = useNavigate();

    useEffect(() => {

        if(!localStorage.getItem("user")) navigate("/")

    }, [])


    return (
        <main className={styles.dashboard}>
            <Header text = "Welcome to Segwitz blog application" />
        </main>
    );

}


export default Dashboard;