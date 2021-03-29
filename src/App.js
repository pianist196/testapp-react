import Home from './pages/Home'
import Filters from './pages/Filters'
import { Route } from 'react-router';
import { useEffect, useState } from 'react';
import axios from 'axios'

function App() {

	const [hotels, setHotels] = useState([])

	useEffect(() => {
		axios.get(window.location +
			'/db.json').then(({ data }) => {
			setHotels(data.hotels)
		})
	}, [])

	return (
		<>
			<Route exact path="/" render={() => <Home items={hotels} />} />
			<Route exact path="/filters" component={Filters} />
		</>
	);
}

export default App;
