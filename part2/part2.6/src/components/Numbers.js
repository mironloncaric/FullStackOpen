export default function Numbers({ toShow }) {
	return (
		<div>
			{toShow.map((person, key) => (
				<div key={key}>
					{person.name} {person.number}
				</div>
			))}
		</div>
	);
}
