export default function Filter({ filter, setFilter }) {
	return <div>
		filter: <input value={filter} onChange={(e) => setFilter(e.target.value)} />
	</div>
}
