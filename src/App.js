import Home from './pages/Home'
import Filters from './pages/Filters'
import { Route } from 'react-router';
import { useEffect } from 'react';
import axios from 'axios'
import { setHotels } from './redux/actions/hotels'
import { useDispatch } from 'react-redux'

function App() {
	const dispatch = useDispatch()

	useEffect(() => {
		axios.get(window.location + '/db.json').then(({ data }) => {
			dispatch(setHotels(data.hotels))
		})
	}, [dispatch])

	return (
		<>
			<Route exact path="/" component={Home} />
			<Route exact path="/filters" component={Filters} />
		</>
	)
}



export default App
