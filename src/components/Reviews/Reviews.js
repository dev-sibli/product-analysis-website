import useReview from '../../hooks/useReview';
import Review from '../Review/Review';

const Reviews = () => {
	const [reviews, setReviews] = useReview([]);

	return (
		<div className="container mx-auto gap-10 grid lg:grid-cols-3 sm:grid-cols-1 m-4">
			{reviews.map((review) => (
				<Review key={review.id} review={review}></Review>
			))}
		</div>
	);
};

export default Reviews;
