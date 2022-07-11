import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/header/Header";
import React from "react";
import BlogsPage from "./pages/BlogsPage/BlogsPage";
import MainPage from "./pages/mainPage/MainPage";
import LoginPage from "./pages/loginPage/LoginPage";
import Blog from "./components/blog/Blog";
import LayoutBack from "./components/LayoutBack/LayoutBack";
import Layout from "./components/Layout/Layout";




function App() {
    return (
        <BrowserRouter>

            <Routes>

                <Route path="/" element={<Layout/>}>
                    <Route path="/blogs" element={<BlogsPage/>}/>
                    <Route index element={<MainPage/>}/>
                </Route>
                <Route path="/login" element={<LoginPage/>}/>



                <Route path="/" element={<LayoutBack/>}>
                    <Route path="/blogs/:id" element={<Blog/>}/>
                </Route>

            </Routes>
                <Routes>

                    <Route path="/" element={<Layout/>}>
                        <Route index element={<MainPage/>}/>
                        <Route path="blogs" element={<BlogsPage/>}/>
                    </Route>

                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/blogs/:name" element={<Blog/>}/>
                </Routes>

        </BrowserRouter>

    );
}

export default App;
