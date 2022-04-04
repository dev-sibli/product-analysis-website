import React from 'react';
import './Home.css';

const Home = () => {
	return (
		<div className="items-center">
			<div className="flex items-center justify-center mt-8">
				<div className="">
					<h1 className="text-3xl font-mono">Which Mac is right for you?</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
						sequi consequatur?
					</p>
					<button className="bg-red-400 p-2 rounded mt-3">Live Demo</button>
				</div>
				<div className="w-50 mr-0">
					<img src="/images/macbook-pro.png" alt="" />
				</div>
			</div>
			<div className="text-center mx-auto mt-8">
				<h2 className="text-4xl font-mono">Customer Reviews</h2>

				<button className="bg-red-400 p-2 rounded mt-3">See All reviews</button>
			</div>
		</div>
	);
};

export default Home;
