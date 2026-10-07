import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone_no: '',
        message: '',
    });

    const [responseMessage, setResponseMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setResponseMessage('');

        try {
            const response = await fetch('https://api.risnagrota.pixxeluclients.com/api/contact-us', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (response.ok) {
                setResponseMessage('Your message has been sent successfully!');
                setFormData({ name: '', email: '', phone_no: '', message: '' }); // Clear the form
            } else {
                setResponseMessage(result.message || 'Failed to send the message. Please try again.');
            }
        } catch (error) {
            setResponseMessage('An error occurred. Please try again later.');
            console.error('Error:', error);
        }

        setIsSubmitting(false);
    };

    return (
        <form className="form-bottom" onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-md-12">
                    <div className="form-field">
                        <label htmlFor="fullName">Full Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your name"
                            required
                        />
                    </div>
                </div>

                <div className="col-md-12">
                    <div className="form-field">
                        <label htmlFor="email">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email address"
                            required
                        />
                    </div>
                </div>

                <div className="col-md-12">
                    <div className="form-field">
                        <label htmlFor="phoneNumber">Phone Number</label>
                        <input
                            type="number"
                            id="phone_no"
                            name="phone_no"
                            value={formData.phone_no}
                            onChange={handleChange}
                            placeholder="Enter your phone number"
                            required
                        />
                    </div>
                </div>

                <div className="col-md-12">
                    <div className="form-field">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Type your message here..."
                            required
                        />
                    </div>
                </div>

                <div className="col-md-12">
                    <div className="form-button">
                        <button type="submit" className="custom-btn" disabled={isSubmitting}>
                            <span>{isSubmitting ? 'Submitting...' : 'Submit'}</span>
                        </button>
                    </div>
                </div>
            </div>

            {responseMessage && <p className="response-message">{responseMessage}</p>}
        </form>
    );
};

export default ContactForm;