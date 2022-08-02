import React from "react";
import Home from './Home';
import About from './About';
import { Route, Routes } from 'react-router-dom';

const NewNav = () => {
    return (
        <>
           
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            

        </>
    )
}

export default NewNav;