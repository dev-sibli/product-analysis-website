import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
	return (
		<div className="text-2xl">
			<Link className="mr-5" to="/">
				Home
			</Link>
			<Link className="mr-5" to="/reviews">
				Review
			</Link>
			<Link className="mr-5" to="/dashboard">
				Dashboard
			</Link>
			<Link className="mr-5" to="/blogs">
				Blogs
			</Link>
			<Link className="mr-5" to="/about">
				About
			</Link>
		</div>
	);
};

export default Header;
