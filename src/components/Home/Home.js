import React from 'react';
import { Link } from 'react-router-dom';
import useReview from '../../hooks/useReview';
import Review from '../Review/Review';
import './Home.css';

const Home = () => {
	const [reviews, setReviews] = useReview();
	const slicedReviews = reviews.slice(0, 3);
	return (
		<div className="container mx-auto">
			<div className="flex items-center justify-center mt-8">
				<div className="">
					<h1 className="text-5xl font-bold  mb-3">Supercharged for pros.</h1>
					<p>
						if you need a true workhorse of a laptop and you want to stay in the
					</p>
					<p>
						Apple ecosystem, I'd say this MacBook Pro is very much worth the
						price
					</p>
					<button className="bg-[orange] p-3 rounded mt-3 font-bold">
						Live Demo
					</button>
				</div>
				<div className="w-25">
					<img src="/images/macbook-pro.png" alt="" />
				</div>
			</div>
			<div className="text-center mx-auto mt-8">
				<h2 className="text-4xl font-bold">Customer Reviews</h2>
				<div className=" gap-20 grid grid-cols-3 mt-8">
					{slicedReviews.map((review) => (
						<Review key={review.id} review={review}></Review>
					))}
				</div>
				<Link to="/reviews">
					<button className="bg-[orange] p-3 rounded my-5 font-bold">
						See All reviews
					</button>
				</Link>
			</div>
		</div>
	);
};

export default Home;
