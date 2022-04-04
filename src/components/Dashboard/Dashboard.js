import React, { useEffect, useState } from 'react';
import {
	CartesianGrid,
	Line,
	LineChart,
	Pie,
	PieChart,
	Tooltip,
	XAxis,
	YAxis,
} from 'recharts';

const Dashboard = () => {
	const [element, setElement] = useState();
	useEffect(() => {
		fetch('data.json')
			.then((res) => res.json())
			.then((data) => setElement(data));
	}, []);

	return (
		<>
			<div className="lg:flex justify-center items-center mt-5">
				<LineChart
					width={800}
					height={400}
					data={element}
					margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
				>
					<Line type="monotone" dataKey="investment" stroke="#8884d8" />
					<CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
					<XAxis dataKey="month" />
					<YAxis />
					<Tooltip />
				</LineChart>

				<PieChart width={800} height={800}>
					<Pie
						data={element}
						dataKey="sell"
						cx="50%"
						cy="50%"
						outerRadius={60}
						fill="#8884d8"
					/>
					<Pie
						data={element}
						dataKey="revenue"
						cx="50%"
						cy="50%"
						innerRadius={70}
						outerRadius={90}
						fill="#82ca9d"
						label
					/>
				</PieChart>
			</div>
		</>
	);
};

export default Dashboard;
