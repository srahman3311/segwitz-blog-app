// useLocation can only be used if the component is inside react-router-dom's Router component
import { useNavigate, useLocation } from "react-router-dom";

// Stylesheet
import styles from "./Layout.module.css";

// Component
import Button from "../reuseable-components/Button";

function Layout() {

    const location = useLocation();
    const navigate = useNavigate();

    const layoutStyle = { 
        display: location.pathname === "/" ? "none" : "block" 
    };

    function logout() {

        localStorage.removeItem("user");
        navigate("/");
    }



    return (
        <div className={styles.layout} style = {layoutStyle}>
            <h2>Segwitz Blog Application</h2>
            <Button title = "Logout" clickHandler={logout} />
        </div>
    );

}

export default Layout;