import Home from './pages/Home'
import Filters from './pages/Filters'
import { Route } from 'react-router';

function App() {
	return (
		<>
			<Route exact path="/" component={Home} />
			<Route exact path="/filters" component={Filters} />
		</>
	);
}

export default App;
