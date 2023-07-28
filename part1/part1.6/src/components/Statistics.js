import StatisticsLine from "./StatisticsLine";

const Statistics = ({ good, neutral, bad, total, positive, average }) => {
	if (total !== 0)
		return (
			<div>
				<h1>statistics</h1>
				<table>
					<StatisticsLine name="good" score={good} />
					<StatisticsLine name="neutral" score={neutral} />
					<StatisticsLine name="bad" score={bad} />
					<StatisticsLine name="total" score={total} />
					<StatisticsLine name="average" score={average} />
					<StatisticsLine name="positive" score={positive} />
					<StatisticsLine name="good" score={good} />
				</table>
			</div>
		);
	else return <p>No feedback has been given.</p>;
};

export default Statistics;
