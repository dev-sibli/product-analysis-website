import React from 'react';

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
					<div className="font-bold text-xl mb-2">{name}</div>
					<p className="text-gray-700 text-base">{about}</p>
				</div>
			</div>
		</>
	);
};

export default Review;
