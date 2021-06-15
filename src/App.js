import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dynamic from './components/Dynamic';
import Navbar from './components/Navbar';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Services from './components/Services';
import Experience from './components/Experience';

function App() {
	return (
		<>
			<Dynamic />
			<Navbar />
			<Header />
			<AboutMe />
			<Services />
			<Experience />
		</>
	);
}

export default App;
