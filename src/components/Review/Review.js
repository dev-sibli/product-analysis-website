import React from 'react';
import Rating from 'react-rating';

const Review = (props) => {
	const { name, image, about } = props.review;
	return (
		<>
			<div className="max-w-sm rounded overflow-hidden bg-[#a7a7a7] ">
				<img
					className="w-[150px] mx-auto rounded-full mt-5"
					src={image}
					alt=""
				/>
				<div className="px-6 py-4 text-center">
					<div>
						<Rating initialRating={4.5} readonly />
					</div>
					<p className="text-black-700 text-base">{about}</p>
					<div className="font-bold text-xl mt-5">{name}</div>
				</div>
			</div>
		</>
	);
};

export default Review;
