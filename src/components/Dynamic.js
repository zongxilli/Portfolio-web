import React from 'react';
//import Particles from 'react-particles-js';
import Particles from 'react-tsparticles';

const Dynamic = () => {
	return (
		<>
			<Particles
				options={{
					fullScreen: {
						enable: true,
						zIndex: 0,
					},
					interactivity: {
						events: {
							onClick: {
								enable: false,
								mode: 'push',
							},
							onHover: {
								enable: true,
								mode: 'repulse',
								parallax: {
									force: 60,
								},
							},
						},
						modes: {
							bubble: {
								distance: 400,
								duration: 2,
								opacity: 0.8,
								size: 40,
							},
							grab: {
								distance: 400,
							},
						},
					},
					particles: {
						color: {
							value: '#ffffff',
						},
						links: {
							color: {
								value: '#10dae8bd',
							},
							distance: 150,
							enable: true,
							opacity: 1,
						},
						move: {
							attract: {
								rotate: {
									x: 600,
									y: 1200,
								},
							},
							enable: true,
							outModes: {
								bottom: 'out',
								left: 'out',
								right: 'out',
								top: 'out',
							},
						},
						number: {
							density: {
								enable: true,
							},
							value: 15,
						},
						opacity: {
							value: {
								min: 0.1,
								max: 0.5,
							},
							animation: {
								enable: true,
								speed: 1,
								minimumValue: 0.1,
							},
						},
						shape: {
							options: {
								character: {
									value: ['r', 'e', 'a', 'c', 't'],
									font: 'Verdana',
									style: '',
									weight: '400',
									fill: true,
								},
								char: {
									value: ['r', 'e', 'a', 'c', 't'],
									font: 'Verdana',
									style: '',
									weight: '400',
									fill: true,
								},
							},
							type: 'char',
						},
						size: {
							value: 16,
							animation: {
								speed: 10,
								minimumValue: 10,
							},
						},
						stroke: {
							width: 1,
							color: {
								value: '#ffffff',
								animation: {
									h: {
										count: 0,
										enable: false,
										offset: 0,
										speed: 1,
										sync: true,
									},
									s: {
										count: 0,
										enable: false,
										offset: 0,
										speed: 1,
										sync: true,
									},
									l: {
										count: 0,
										enable: false,
										offset: 0,
										speed: 1,
										sync: true,
									},
								},
							},
						},
					},
				}}
			/>
		</>
	);
};

export default Dynamic;
