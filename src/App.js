import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dynamic from './components/Dynamic';
import Navbar from './components/Navbar';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Services from './components/Services';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contacts';

function App() {
	return (
		<>
			<Dynamic />
			<Navbar />
			<Header />
			<AboutMe />
			<Services />
			<Experience />
			<Portfolio />
			<Testimonials />
			<Contact />
		</>
	);
}

export default App;
