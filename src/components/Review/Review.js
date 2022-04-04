import React from 'react';
import Rating from 'react-rating';

const Review = (props) => {
	const { name, image, about, rating } = props.review;
	return (
		<div>
			<div className="rounded overflow-hidden bg-gray-300 h-full">
				<img
					className="w-[150px] mx-auto rounded-full mt-5"
					src={image}
					alt=""
				/>
				<div className="px-6 py-4 text-center">
					<div>
						<Rating initialRating={rating} readonly />
					</div>
					<div className="mx-auto"></div>
					<p className="text-black-700 text-base">{about}</p>
					<div className="font-bold text-xl mt-5">{name}</div>
				</div>
			</div>
		</div>
	);
};

export default Review;
