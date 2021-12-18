import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Route Components
import Layout from "./components/layout/Layout";
import Login from "./components/login/Login";
import Dashboard from "./components/dashboard/Dashboard";
import Blogs from "./components/blogs/Blogs";
import AddNewBlog from "./components/blogs/AddNewBlog";
import BlogItem from "./components/blogs/BlogItem";


function App() {

    return (
        <Router>
            <Layout />
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/blogs/add-new-blog" element={<AddNewBlog />} />
                <Route path="/blogs/:blogId" element={<BlogItem />} />
            </Routes>
        </Router>
    );
}

export default App;