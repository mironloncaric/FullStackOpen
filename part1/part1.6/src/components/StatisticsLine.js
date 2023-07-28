const StatisticsLine = ({ name, score }) => {
	return (
		<tr>
			<td>{name}:</td> <td>{score}</td>
		</tr>
	);
};

export default StatisticsLine;
