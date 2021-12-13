import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Route Components
import Dashboard from "./components/dashboard/Dashboard";
import Blogs from "./components/blogs/Blogs";

// import { useSelector, useDispatch } from "react-redux";
// import { bindActionCreators } from "redux";
// import { actionCreators } from "./store/index"


function App() {

    // const blogs = useSelector(state => state.blogs);
    // const dispatch = useDispatch();

    // const { createBlog, deleteBlog } = bindActionCreators(actionCreators, dispatch);

    
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/blogs" element={<Blogs />} />
            </Routes>
        </Router>
    );
}

export default App;