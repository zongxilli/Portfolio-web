import React from 'react';
import Typed from 'react-typed';
import { Link } from 'react-scroll';

const Header = () => {
	return (
		<div id="home" className="header-wraper">
			<div className="main-info">
				<h1>Zongxi(Kenny) Li</h1>
				<Typed
					className="typed-text"
					strings={[
						'Full stack developer at Mosaic Manufacturing',
						'UofTGrad21',
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

// 'React',
// 						'Redux',
// 						'Express',
// 						'Node.Js',
// 						'GraphQL',
// 						'Axios',
// 						'MongoDB',
// 						'Mongoose',
// 						'PostgreSQL',
// 						'Sequelize',
// 						'Bootstrap',
// 						'Semantic UI',
// 						'Material UI',