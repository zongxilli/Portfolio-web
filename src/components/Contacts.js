import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { useForm } from 'react-hook-form';

const Contacts = () => {
	const [successMessage, setSuccessMessage] = useState('');
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const serviceID = 'service_1';
	const templateID = 'template_1';
	const userID = 'user_D3ZO2vg1mt9apFOWDnX1Z';

	const onSubmit = (data, r) => {
		sendEmail(
			serviceID,
			templateID,
			{
				name: data.name,
				phone: data.phone,
				email: data.email,
				subject: data.subject,
				description: data.description,
			},
			userID
		);
		r.target.reset();
	};

	const sendEmail = (serviceID, templateID, variables, userID) => {
		emailjs
			.send(serviceID, templateID, variables, userID)
			.then(() => {
				setSuccessMessage("Sent successfully! I'll contact you ASAP");
			})
			.catch((err) =>
				console.error(`Oops, Something went wrong! Error: ${err}`)
			);
	};

	return (
		<div className="contacts">
			<div className="text-center">
				<h1>contact me</h1>
				<p>Feel free to contact me at any time and I will contact you ASAP</p>
				<span className="success-message">{successMessage}</span>
			</div>
			<div className="container">
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className="row">
						<div className="col-md-6 col-xs-12">
							{/* ------------------------------------------ NAME */}

							<div className="text-center">
								<input
									className="form-control"
									type="text"
									placeholder="Name"
									name="name"
									{...register('name', {
										required: 'Please enter your name',
										maxLength: {
											value: 20,
											message:
												'Please enter a name which is less than 20 characters',
										},
									})}
								/>
								<div className="line"></div>
							</div>

							<span className="error-message">
								{errors.name && errors.name.message}
							</span>
							{/* ------------------------------------------ PHONE */}

							<div className="text-center">
								<input
									className="form-control"
									type="text"
									placeholder="Phone Number"
									name="phone"
									{...register('phone', {
										required: 'Please enter your phone number',
									})}
								/>
								<div className="line"></div>
							</div>
							<span className="error-message">
								{errors.phone && errors.phone.message}
							</span>
							{/* ------------------------------------------ EMAIL */}

							<div className="text-center">
								<input
									className="form-control"
									type="email"
									placeholder="Email"
									name="email"
									{...register('email', {
										required: 'Please provide your email',
										pattern: {
											value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
											message: 'invalid Email',
										},
									})}
								/>
								<div className="line"></div>
							</div>
							<span className="error-message">
								{errors.email && errors.email.message}
							</span>
							{/* ------------------------------------------ SUBJECT */}

							<div className="text-center">
								<input
									className="form-control"
									type="text"
									placeholder="Subject"
									name="subject"
									{...register('subject', {
										required: 'Oops, you forget to add the subject',
									})}
								/>
								<div className="line"></div>
							</div>
							<span className="error-message">
								{errors.subject && errors.subject.message}
							</span>
						</div>
						<div className="col-md-6 col-xs-12">
							{/* ------------------------------------------ DESCRIPTION */}

							<div className="text-center">
								<textarea
									className="form-control"
									type="text"
									placeholder="Please describe shortly :)"
									name="description"
									{...register('description', {
										required: 'Please describe shortly :)',
									})}></textarea>
								<div className="line"></div>
							</div>
							<span className="error-message">
								{errors.description && errors.description.message}
							</span>
							<button className="btn-main-offer contact-btn" type="submit">
								contact me
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Contacts;
