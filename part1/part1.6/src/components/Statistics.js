const Statistics = ({ good, neutral, bad, total, positive, average }) => {
	return (
		<div>
			<h1>statistics</h1>
			good: {good}
			<br />
			neutral: {neutral}
			<br />
			bad: {bad}
			<br />
			total: {total}
			<br />
			average: {average}
			<br />
			positive: {positive}
		</div>
	);
};

export default Statistics;
