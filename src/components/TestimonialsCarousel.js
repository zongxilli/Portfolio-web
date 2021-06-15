import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import avatar1 from '../images/animal_avatar (1).jpg';
import avatar2 from '../images/animal_avatar (11).jpg';
import avatar3 from '../images/animal_avatar (5).jpg';
import avatar4 from '../images/animal_avatar (4).jpg';

const TestimonialsCarousel = () => {
	return (
		<Carousel
    showArrows={true}
    infiniteLoop={true}
    showThumbs={false}
    showStatus={false}
    autoPlay={true}
    interval={2000}
    >
			<>
				<img src={avatar1} alt="Avatar" />
				<div className="myCarousel">
					<h3>Name</h3>
					<p>Text of the animal</p>
				</div>
			</>
			<>
				<img src={avatar2} alt="Avatar" />
				<div className="myCarousel">
					<h3>Name</h3>
					<p>Text of the animal</p>
				</div>
			</>
			<>
				<img src={avatar3} alt="Avatar" />
				<div className="myCarousel">
					<h3>Name</h3>
					<p>Text of the animal</p>
				</div>
			</>
			<>
				<img src={avatar4} alt="Avatar" />
				<div className="myCarousel">
					<h3>Name</h3>
					<p>Text of the animal</p>
				</div>
			</>
		</Carousel>
	);
};

export default TestimonialsCarousel;
