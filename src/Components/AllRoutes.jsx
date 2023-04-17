import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import Home from '../Pages/Home';
import Login from '../Pages/Login';

const AllRoutes = () => {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/login" element={<Login />} />
			</Routes>
		</div>
	);
};

export default AllRoutes;
