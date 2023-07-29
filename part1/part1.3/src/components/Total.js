function Total({ data }) {
	return (
		<strong>
			Number of exercises{" "}
			{data.reduce((previous, current) => previous + current.exercises, 0)}
		</strong>
	);
}

export default Total;
