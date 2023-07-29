import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import Input from "./components/Input";
import Numbers from "./components/Numbers";
import axios from "axios";

function App() {
	const [persons, setPersons] = useState([]);
	const [newName, setNewName] = useState("");
	const [newNumber, setNewNumber] = useState("");

	const [filter, setFilter] = useState("");

	useEffect(() => {
		axios.get("http://localhost:3002/persons")
			.then((response) => {
				setPersons(response.data);
			})
	}, [])

	const addPerson = (e) => {
		e.preventDefault();
		const existsName = persons.find((name) => name.name == newName);
		if (existsName) {
			setNewName("");
			alert(`${newName} is already in the phonebook.`);
			return;
		}

		const existsNumber = persons.find((person) => person.number == newNumber);
		if (existsNumber) {
			setNewNumber("");
			alert(`${newNumber} is already in the phonebook.`);
			return;
		}

		setPersons(persons.concat({ name: newName, number: newNumber }));
		setNewName("");
		setNewNumber("");
	};

	const toShow = (persons && persons.length !== 0) && persons.map(
		(person) => person.name.startsWith(filter, 0) && person
	);

	return (
		<div>
			<h1>Phonebook</h1>
			<Filter filter={filter} setFilter={setFilter} />
			<h2>Add:</h2>
			<Input
				addPerson={addPerson}
				newName={newName}
				setNewName={setNewName}
				newNumber={newNumber}
				setNewNumber={setNewNumber}
			/>
			<h2>Numbers:</h2>
			<Numbers toShow={toShow} />
		</div>
	);
}

export default App;
