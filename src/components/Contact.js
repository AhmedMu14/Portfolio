import { motion } from "framer-motion";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import emailjs from "emailjs-com";
import "react-toastify/dist/ReactToastify.css";
import "../styles/Contact.css";

const Contact = () => {
	const fade = { opacity: 1, transition: { duration: 1.5 } };
	const verticalLeft = { opacity: 1, y: 0, transition: { duration: 1.5 } };

	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setIsSubmitting(true);

		emailjs
			.send(
				"service_t3f94yf", // Replace with your service ID
				"template_8yl2i0v", // Replace with your template ID
				formData,
				"iIlrV2JuyKMEh6ytv" // Replace with your public key
			)
			.then(() => {
				toast.success("Message sent successfully!", { position: "top-left" });
				setFormData({ name: "", email: "", message: "" });
				setIsSubmitting(false);
			})
			.catch((error) => {
				toast.error("Failed to send message. Try again.", { position: "top-left" });
				console.error(error);
				setIsSubmitting(false);
			});
	};

	return (
		<>
			<div className="contact" id="contact">
				<div className="container">
					<motion.div className="heading" initial={{ opacity: 0 }} whileInView={fade} viewport={{ once: true }}>
						<p className="heading-sub-text">Hire Me</p>
						<p className="heading-text">Get in Touch</p>
					</motion.div>
					<div className="contact-box">
						<motion.div className="left-box" initial={{ opacity: 0, y: "-50px" }} whileInView={verticalLeft}>
							<div className="contact-heading">
								<p>
									I’m interested in freelance opportunities – especially ambitious or large projects. However, if you have other requests or questions, don’t hesitate to use the form.
								</p>
							</div>
							<div className="contact-hello">
								<p>Say Hello</p>
								<Link className="hello-links" to="//wa.me/+923192345037" target="_blank">
									wa.me/AhmedMu14
								</Link>
								<a className="hello-links" href="mailto:pjinadu02@gmail.com" target="_blank" rel="noreferrer">
									Ahmedmujahid2004@gmail.com
								</a>
							</div>
						</motion.div>
						<motion.div className="right-box" initial={{ opacity: 0, y: "50px" }} whileInView={verticalLeft}>
							<form onSubmit={handleSubmit}>
								<div className="form-top">
									<div className="name">
										<label htmlFor="name">Your Name</label>
										<input type="text" name="name" id="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" required />
									</div>
									<div className="email">
										<label htmlFor="email">Your Email</label>
										<input type="email" name="email" id="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" required />
									</div>
								</div>

								<div className="form-mid">
									<div className="message">
										<label htmlFor="message">Your Message</label>
										<textarea name="message" id="message" value={formData.message} onChange={handleChange} placeholder="Your message here..." required></textarea>
									</div>
								</div>

								<div className="form-btn">
									<button type="submit" disabled={isSubmitting} className="hero-contact">
										{isSubmitting ? "Sending..." : "Send Message"}
									</button>
								</div>
							</form>
						</motion.div>
					</div>
				</div>
			</div>
			<ToastContainer />
		</>
	);
};

export default Contact;
