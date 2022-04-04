import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css';

const Header = () => {
	return (
		<div className="text-center text-2xl lg:flex  justify-center">
			<CustomLink className="mr-5" to="/">
				Home
			</CustomLink>
			<CustomLink className="mr-5 " to="/reviews">
				Review
			</CustomLink>
			<CustomLink className="mr-5" to="/dashboard">
				Dashboard
			</CustomLink>
			<CustomLink className="mr-5" to="/blogs">
				Blogs
			</CustomLink>
			<CustomLink className="mr-5" to="/about">
				About
			</CustomLink>
		</div>
	);
};

export default Header;
