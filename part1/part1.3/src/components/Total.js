function Total({ data }) {
	return (
		<p>
			Number of exercises{" "}
			{data[0].exercises + data[1].exercises + data[2].exercises}
		</p>
	);
}

export default Total;
