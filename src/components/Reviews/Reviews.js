// import React, { useEffect, useState } from 'react';
import useReview from '../../hooks/useReview';
import Review from '../Review/Review';

const Reviews = () => {
	const [reviews, setReviews] = useReview([]);

	// useEffect(() => {
	// 	fetch('reviews.json')
	// 		.then((res) => res.json())
	// 		.then((data) => setReviews(data));
	// }, []);
	return (
		<div className="container mx-auto gap-10 grid grid-cols-3 mt-8">
			{reviews.map((review) => (
				<Review key={review.id} review={review}></Review>
			))}
		</div>
	);
};

export default Reviews;
