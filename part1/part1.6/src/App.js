import { useState } from "react";
import Statistics from "./components/Statistics";
import Button from "./components/Button";

const App = () => {
	// save clicks of each button to its own state
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	const [total, setTotal] = useState(0);

	const voteGood = () => {
		let updatedGood = good + 1;
		setGood(updatedGood);
		setTotal(neutral + bad + updatedGood);
	};
	const voteNeutral = () => {
		let updatedNeutral = neutral + 1;
		setNeutral(updatedNeutral);
		setTotal(updatedNeutral + bad + good);
	};
	const voteBad = () => {
		let updatedBad = bad + 1;
		setBad(updatedBad);
		setTotal(neutral + updatedBad + good);
	};
	const getPositivePercent = () => ((good / total) * 100).toFixed(2) + "%";
	const getAvaragePercent = () => ((good * 1 + bad * -1) / total).toFixed(2);

	return (
		<div>
			<div>
				<h1>give feedback</h1>
				<Button name="good" action={voteGood} />
				<Button name="neutral" action={voteNeutral} />
				<Button name="bad" action={voteBad} />
			</div>
			<Statistics
				good={good}
				neutral={neutral}
				bad={bad}
				total={total}
				average={getAvaragePercent()}
				positive={getPositivePercent()}
			/>
		</div>
	);
};

export default App;
