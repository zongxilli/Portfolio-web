import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import avatar1 from '../images/travel (2).jpg';
import avatar2 from '../images/travel (5).jpg';
import avatar3 from '../images/travel (6).jpg';
import avatar4 from '../images/travel (4).jpg';
import avatar5 from '../images/travel (8).jpg';
import avatar6 from '../images/travel (10).jpg';
import avatar8 from '../images/travel (13).jpg';
import avatar9 from '../images/travel (14).jpg';
import avatar10 from '../images/travel (15).jpg';
import avatar11 from '../images/travel (18).jpg';
import avatar12 from '../images/travel (19).jpg';
import avatar13 from '../images/travel (20).jpg';
import avatar14 from '../images/travel (21).jpg';

const TestimonialsCarousel = () => {
	return (
		<Carousel
			showArrows={true}
			infiniteLoop={true}
			showThumbs={false}
			showStatus={false}
			autoPlay={true}
			interval={2000}>
			<>
				<img src={avatar1} alt="Avatar" />
				<div className="myCarousel">
					<h3>Mount Royal</h3>
					<p>A famous lookout at Mount Royal in the city of Montreal</p>
				</div>
			</>
			<>
				<img src={avatar2} alt="Avatar" />
				<div className="myCarousel">
					<h3>Hot pot</h3>
					<p>Favorite food for life time</p>
				</div>
			</>
			<>
				<img src={avatar3} alt="Avatar" />
				<div className="myCarousel">
					<h3>My little prince Kennie</h3>
					<p>He is a typically Persian cat :)</p>
				</div>
			</>
			<>
				<img src={avatar4} alt="Avatar" />
				<div className="myCarousel">
					<h3>Parc Omega</h3>
					<p>A safari park in Notre-Dame-de-Bonsecours</p>
				</div>
			</>
			<>
				<img src={avatar5} alt="Avatar" />
				<div className="myCarousel">
					<h3>Blue Lagoon Island</h3>
					<p>It is an island in Bahamas</p>
					<br />
					<p>Also my first time playing with dolphin</p>
				</div>
			</>
			<>
				<img src={avatar6} alt="Avatar" />
				<div className="myCarousel">
					<h3>Montmorency Falls</h3>
					<p>A large waterfall on the Montmorency River in Quebec city</p>
				</div>
			</>
			<>
				<img src={avatar8} alt="Avatar" />
				<div className="myCarousel">
					<h3>Indoor basketball game</h3>
					<p>My favorite sport is playing basketball, no matter where</p>
				</div>
			</>
			<>
				<img src={avatar9} alt="Avatar" />
				<div className="myCarousel">
					<h3>Blue Lagoon Island</h3>
					<p>First time hug dolphin !!!!</p>
				</div>
			</>
			<>
				<img src={avatar10} alt="Avatar" />
				<div className="myCarousel">
					<h3>My little princess Doubing</h3>
					<p>She is a beautiful Ragdoll :)</p>
				</div>
			</>
			<>
				<img src={avatar11} alt="Avatar" />
				<div className="myCarousel">
					<h3>Quartier du Petit Champlain</h3>
					<p>A small commercial zone in Quebec City</p>
				</div>
			</>
			<>
				<img src={avatar12} alt="Avatar" />
				<div className="myCarousel">
					<h3>Highway 401</h3>
					<p>
						a controlled-access 400-series highway in the Canadian province of
						Ontario
					</p>
				</div>
			</>
			<>
				<img src={avatar13} alt="Avatar" />
				<div className="myCarousel">
					<h3>Fairmont Le Château Frontenac</h3>
					<p>A very famous and historic hotel in Quebec City</p>
				</div>
			</>
			<>
				<img src={avatar14} alt="Avatar" />
				<div className="myCarousel">
					<h3>Dorset Lookout Tower</h3>
					<p>A great lookout located near the Algonquin Provincial Park</p>
				</div>
			</>
		</Carousel>
	);
};

export default TestimonialsCarousel;
