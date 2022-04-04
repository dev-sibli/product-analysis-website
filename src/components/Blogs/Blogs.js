import React from 'react';

const Blogs = () => {
	return (
		<div className="container mx-auto mt-5">
			<div className="my-5">
				<h1 className="text-4xl">What is Context API? How It's works?</h1>
				<p>
					Normally in react application data is passed top-down (parent to
					child) via props, but that can be problematic for certain types of
					props. via props data passed to parent to children. With Context we
					can share one state across the entire app easily. We don't need to
					pass props down manually at every level.
				</p>
			</div>
			<div>
				<h1 className="text-4xl">What is Semantic Tag? </h1>
				<p>
					Semantic HTML elements are those that clearly describe their meaning
					in a human- and machine-readable way. Elements such as 'header' ,
					'footer' and 'article' are all considered semantic because they
					accurately describe the purpose of the element and the type of content
					that is inside them. it is much easier to read. semantic elements are
					easier to understand for human, Search engines etc
				</p>
			</div>
		</div>
	);
};

export default Blogs;
