import React from 'react';
import Typed from 'react-typed';
import { Link } from 'react-scroll';

const Header = () => {
	return (
		<div id="home" className="header-wraper">
			<div className="main-info">
				<h1>Fullstack Developer</h1>
				<Typed
					className="typed-text"
					strings={[
						'React',
						'Redux',
						'Express',
						'Node.Js',
						'GraphQL',
						'Axios',
						'MongoDB',
						'Mongoose',
						'PostgreSQL',
						'Sequelize',
						'Bootstrap',
						'Semantic UI',
						'Material UI',
					]}
					typeSpeed={60}
					backSpeed={40}
					loop
				/>
				{/* <Link
					smooth={true}
					to="contacts"
					offset={-110}
					className="btn-main-offer"
					>
					contact me
				</Link> */}
			</div>
		</div>
	);
};

export default Header;
