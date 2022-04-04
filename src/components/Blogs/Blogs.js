import React from 'react';

const Blogs = () => {
	return (
		<div className="container mx-auto mt-5">
			<h1 className="text-4xl">What is Context API? How It's works?</h1>
			<p>
				Normally in react application data is passed top-down (parent to child)
				via props, but that can be problematic for certain types of props. via
				props data passed to parent to children. With Context we can share one
				state across the entire app easily. We don't need to pass props down
				manually at every level.
			</p>
		</div>
	);
};

export default Blogs;
