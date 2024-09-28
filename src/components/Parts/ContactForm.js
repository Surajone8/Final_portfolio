import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    budget: '',
    message: '',
  });

  const fileInputRef = useRef(null);
  const formRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const form = formRef.current;
    const formDataWithFiles = new FormData(form);
    emailjs.sendForm(
        'service_sokretx',
        'template_4l5uath',
        formRef.current,
        'xRLnnNajFxTGjT-En'
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('Message sent successfully!');
        },
        (error) => {
          console.log("Error details:", error);
          alert(`Error sending message: ${error.text}. Please try again.`);
        }
      );

    setFormData({
      fullName: '',
      email: '',
      phone: '',
      subject: '',
      budget: '',
      message: '',
    });
    form.reset();
  };

  return (
    <div className="contact-form-container">
      <form ref={formRef} onSubmit={sendEmail}>
        <div className="form-row">
          <div className="form-group">
            <label>FULL NAME *</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              placeholder="Your Full Name"
            />
          </div>
          <div className="form-group">
            <label>EMAIL *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Your email address"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>PHONE *</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your phone number"
            />
          </div>
          <div className="form-group">
            <label>SUBJECT *</label>
            <select
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            >
              <option value="">Select a subject</option>
              <option value="Project Inquiry">Project Inquiry</option>
              <option value="General Inquiry">General Inquiry</option>
              <option value="Feedback">Feedback</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>CTC/STIPEND</label>
            <input
              type="text"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              placeholder="A range budget for your project"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>MESSAGE</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Write your message here..."
            ></textarea>
          </div>
        </div>

        <div className="form-row">
          <button type="submit" className="send-button">
            SEND MESSAGE
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
