// useLocation can only be used if the component is inside react-router-dom's Router component
import { Link, useNavigate, useLocation } from "react-router-dom";

// Stylesheet
import styles from "./Layout.module.css";


function Layout() {

    const location = useLocation();
    const navigate = useNavigate();

    // If we are in the homepage no need to show the logout button
    const layoutStyle = { 
        display: location.pathname === "/" ? "none" : "flex" 
    };

    function logout() {

        localStorage.removeItem("user");
        navigate("/");
    }


    const homeRouteStyle = {
        padding: "5px 10px 10px 10px"
    }

    return (
        <div className={styles.layout} style = {layoutStyle}>
            <Link
                style = {homeRouteStyle} 
                className = {styles.dashboard_route} 
                to="/dashboard"
            >
                Segwitz Blog Application
            </Link>
            <div className={styles.routes_logout}>
                <Link className={styles.routes} to="/blogs">Blogs</Link>
                <Link className={styles.routes} to="/blogs/add-new-blog">New Blog</Link>
                <button className={styles.logout_button} onClick={logout}>Logout</button>
            </div>
            
        </div>
    );

}

export default Layout;