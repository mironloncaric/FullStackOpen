const Statistics = ({ good, neutral, bad, total, positive, average }) => {
	if (total !== 0)
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
	else return <p>No feedback has been given.</p>;
};

export default Statistics;
