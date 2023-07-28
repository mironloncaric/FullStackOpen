import Part from "./Part";

export default function Content({ data }) {
	return (
		<>
			{data.map((part, index) => (
				<Part part={part} key={index} />
			))}
		</>
	);
}
